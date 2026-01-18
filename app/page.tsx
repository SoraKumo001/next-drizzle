"use client";
import { useFindManyPostQuery, OrderBy } from "./generated/graphql";
import { useUser } from "./hooks/useAuth";
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
      <Link
        href="/posts/new"
        className="text-blue-500 hover:underline mb-4 block"
      >
        Create New Post
      </Link>
      <h1 className="text-2xl font-bold">Posts</h1>
      {data?.findManyPost?.map((post) => (
        <div
          key={post.id}
          className={`border p-4 rounded shadow ${
            !post.published ? "bg-gray-200" : ""
          } ${user?.id === post.authorId ? "border-blue-500 border-2" : ""}`}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <Link href={`/posts/${post.id}`}>
              <button className="bg-blue-100 text-blue-500 text-sm btn">
                Edit
              </button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            {post.author && <span>By {post.author.name} • </span>}
            {new Date(post.createdAt).toLocaleString()}
          </div>
          <div className="mt-2">{post.content}</div>
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mt-2">
              {post.categories.map((category) => (
                <span
                  key={category.id}
                  className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
