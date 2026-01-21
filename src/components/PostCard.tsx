"use client";

import { useUser } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string | Date;
    authorId?: string | null;
    author?: {
      name: string;
    } | null;
    categories?: {
      id: string;
      name: string;
    }[] | null;
  };
}

export const PostCard = ({ post }: PostCardProps) => {
  const user = useUser();
  const router = useRouter();
  const isMyPost = user?.id === post.authorId;

  return (
    <div
      onClick={() => router.push(`/posts/${post.id}`)}
      className={`cursor-pointer card bg-base-100 shadow-sm border h-full transition-all hover:shadow-md ${
        !post.published ? "opacity-60" : ""
      } ${
        isMyPost
          ? "bg-primary/5 border-primary/60"
          : "border-base-300 hover:border-base-content/30"
      }`}
    >
      <div className="card-body">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h2 className="card-title text-lg break-words line-clamp-2">
            {post.title}
          </h2>
          <div className="flex flex-col gap-1 items-end shrink-0">
            {!post.published && (
              <div className="badge badge-warning badge-sm">Draft</div>
            )}
            {isMyPost && (
              <div className="badge badge-primary badge-sm">My Post</div>
            )}
          </div>
        </div>

        <div className="text-xs text-base-content/70 mb-2">
          {post.author && (
            <span className="font-semibold block">{post.author.name}</span>
          )}
          <span>
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}      
          </span>
        </div>

        <p className="text-sm text-base-content/80 line-clamp-3 mb-4">
          {post.content}
        </p>

        <div className="card-actions justify-end mt-auto items-center">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-1 mr-auto">
              {post.categories.slice(0, 2).map((category) => (
                <div key={category?.id} className="badge badge-outline badge-xs">      
                  {category?.name}
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
};
