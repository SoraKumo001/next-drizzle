"use client";
import { use } from "react";
import { useFindFirstPostQuery } from "../../../generated/graphql";
import Link from "next/link";
import { useUser } from "@/hooks/useAuth";

export default function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const user = useUser();
  const [{ data, fetching, error }] = useFindFirstPostQuery({
    variables: { where: { id: { eq: id } } },
  });

  if (fetching)
    return (
      <div className="p-4 flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (error)
    return (
      <div className="p-4 alert alert-error">Error: {error.message}</div>
    );
  if (!data?.findFirstPost)
    return <div className="p-4 alert alert-info">Post not found</div>;

  const post = data.findFirstPost;
  const isAuthor = user?.id === post.authorId;

  return (
    <div className="p-4">
      <Link href="/" className="btn btn-ghost btn-sm mb-4">
        &larr; Back to Home
      </Link>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="flex justify-between items-start">
            <h1 className="card-title text-4xl font-bold mb-2">{post.title}</h1>
            {isAuthor && (
              <Link
                href={`/posts/${id}/edit`}
                className="btn btn-primary btn-sm"
              >
                Edit
              </Link>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-base-content/70 mb-6">
            <div className="flex items-center gap-1">
              <span>{post.author?.name || "Unknown Author"}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            {!post.published && (
              <div className="badge badge-warning">Draft</div>
            )}
          </div>

          <div className="divider"></div>

          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-lg leading-relaxed">
              {post.content}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.categories?.map((category) => (
              <div key={category.id} className="badge badge-outline p-3">
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}