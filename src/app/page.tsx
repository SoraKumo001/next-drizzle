"use client";
import { useFindManyPostQuery, OrderBy } from "@/generated/graphql";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";

const context = { additionalTypenames: ["Post"] };

export default function Home() {
  const [{ data, error, fetching }, executeQuery] = useFindManyPostQuery({
    variables: { orderBy: [{ createdAt: OrderBy.Desc }] },
    context,
  });

  return (
    <div className="p-4">
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
          {data?.findManyPost?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
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