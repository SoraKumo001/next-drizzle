"use client";
import { useFindManyPostQuery, OrderBy } from "@/generated/graphql";
import { useUser } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const context = { additionalTypenames: ["Post"] };

export default function Home() {
  const user = useUser();
  const router = useRouter();
  const [{ data, error, fetching }, executeQuery] = useFindManyPostQuery({
    variables: { orderBy: [{ createdAt: OrderBy.Desc }] },
    context,
  });

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Latest Posts</h1>
          <button
            className={`btn btn-circle btn-ghost btn-sm ${
              fetching ? "animate-spin" : ""
            }`}
            onClick={() => executeQuery({ requestPolicy: "network-only" })}
            title="Refresh"
            disabled={fetching}
          >
            {fetching ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <span className="material-symbols-outlined">refresh</span>
            )}
          </button>
        </div>
        <Link href="/posts/new" className="btn btn-primary">
          Create New Post
        </Link>
      </div>

      {error ? (
        <div className="alert alert-error my-4">
          <span className="material-symbols-outlined">error</span>
          <span>Error: {error.message}</span>
        </div>
      ) : fetching ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.findManyPost?.map((post) => {
            const isMyPost = user?.id === post.authorId;
            return (
              <div
                key={post.id}
                onClick={() => router.push(`/posts/${post.id}`)}
                className={`cursor-pointer card bg-base-100 shadow-sm border h-full transition-all hover:shadow-md ${
                  !post.published ? "opacity-60" : ""
                } ${
                  isMyPost
                    ? "bg-primary/5 border-primary/40"
                    : "border-base-200 hover:border-base-300"
                }`}
              >
                <div className="card-body">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="card-title text-lg break-words line-clamp-2">
                      {post.title}
                    </h2>
                    <div className="flex flex-col gap-1 items-end shrink-0">
                      {!post.published && (
                        <div className="badge badge-warning badge-sm">
                          Draft
                        </div>
                      )}
                      {isMyPost && (
                        <div className="badge badge-primary badge-sm">
                          My Post
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-base-content/70 mb-2">
                    {post.author && (
                      <span className="font-semibold block">
                        {post.author.name}
                      </span>
                    )}
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>

                  <p className="text-sm text-base-content/80 line-clamp-3 mb-4">
                    {post.content}
                  </p>

                  <div className="card-actions justify-end mt-auto items-center">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1 mr-auto">
                        {post.categories.slice(0, 2).map((category) => (
                          <div
                            key={category.id}
                            className="badge badge-outline badge-xs"
                          >
                            {category.name}
                          </div>
                        ))}
                        {post.categories.length > 2 && (
                          <div className="badge badge-ghost badge-xs">
                            +{post.categories.length - 2}
                          </div>
                        )}
                      </div>
                    )}

                    {isMyPost && (
                      <Link
                        href={`/posts/${post.id}/edit`}
                        onClick={(e) => e.stopPropagation()}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!fetching && !error && data?.findManyPost?.length === 0 && (
        <div className="text-center py-10 text-base-content/50">
          <p>No posts found. Be the first to create one!</p>
        </div>
      )}
    </div>
  );
}
