"use client";
import { useFindManyPostQuery, OrderBy } from "../generated/graphql";
import { useUser } from "../hooks/useAuth";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  const [{ data, error, fetching }] = useFindManyPostQuery({
    variables: { orderBy: [{ createdAt: OrderBy.Desc }] },
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="p-4 grid gap-4">
      <Link href="/posts/new" className="btn btn-primary w-fit">
        Create New Post
      </Link>
      <h1 className="text-2xl font-bold">Posts</h1>
      {data?.findManyPost?.map((post) => (
        <div
          key={post.id}
          className={`card bg-base-100 shadow-xl ${
            !post.published ? "bg-base-200" : ""
          } ${user?.id === post.authorId ? "border-2 border-primary" : ""}`}
        >
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">{post.title}</h2>
              <Link
                href={`/posts/${post.id}`}
                className="btn btn-outline btn-primary btn-sm"
              >
                Edit
              </Link>
            </div>
            <div className="text-sm text-base-content/70">
              {post.author && <span>By {post.author.name} • </span>}
              {new Date(post.createdAt).toLocaleString()}
            </div>
            <p className="mt-2">{post.content}</p>
            {post.categories && post.categories.length > 0 && (
              <div className="card-actions mt-2">
                {post.categories.map((category) => (
                  <div key={category.id} className="badge badge-outline">
                    {category.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
