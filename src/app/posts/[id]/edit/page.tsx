"use client";
import { useState } from "react";
import {
  useFindFirstPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useFindManyCategoryQuery,
} from "../../../../generated/graphql";
import { useUser } from "@/hooks/useAuth";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const user = useUser();
  const router = useRouter();

  const [{ data: postData, fetching: fetchingPost }] = useFindFirstPostQuery({
    variables: { where: { id: { eq: id } } },
  });
  const [{ data: categoriesData }] = useFindManyCategoryQuery();
  const [{ error: updateError }, updatePost] = useUpdatePostMutation();
  const [{}, deletePost] = useDeletePostMutation();

  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const post = postData?.findFirstPost;
  if (post && loadedId !== post.id) {
    setLoadedId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setPublished(post.published);
    setSelectedCategories(
      post.categories ? post.categories.map((c) => c.id) : []
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const result = await updatePost({
      where: { id: { eq: id } },
      input: {
        title,
        content,
        published,
        categories: {
          set: selectedCategories.map((catId) => ({ id: catId })),
        },
      },
    });

    if (result.error) return;

    router.push("/");
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const result = await deletePost({
      where: { id: { eq: id } },
    });

    if (result.error) {
      setDeleteError(result.error.message);
      return;
    }

    if (result.data?.deletePost && result.data.deletePost.length > 0) {
      router.push("/");
    } else {
      setDeleteError(
        "Failed to delete post: Post not found or already deleted."
      );
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (fetchingPost) return <div>Loading...</div>;
  if (!postData?.findFirstPost) return <div>Post not found</div>;

  if (!user) {
    return (
      <div className="p-4">
        <div>Please sign in to edit a post.</div>
        <Link href="/users" className="text-blue-500 hover:underline">
          Go to Users page
        </Link>
      </div>
    );
  }

  return (
    <>
      <title>{`Edit Post - ${postData.findFirstPost.title}`}</title>
      <div className="p-4">
        <Link href="/" className="btn btn-ghost btn-sm mb-4">
          &larr; Back to Home
        </Link>
        <div className="flex justify-between items-center mb-4 max-w-lg">
          <h1 className="text-2xl font-bold">Edit Post</h1>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-error btn-sm text-white"
          >
            Delete Post
          </button>
        </div>
        {updateError && (
          <div role="alert" className="alert alert-error mb-4">
            <span>Error: {updateError.message}</span>
          </div>
        )}
        {deleteError && (
          <div role="alert" className="alert alert-error mb-4">
            <span>Delete Error: {deleteError}</span>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 max-w-lg form-control"
        >
          <div>
            <label className="label font-bold">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold">
              <span className="label-text">Content</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered w-full h-32"
              required
            />
          </div>
          <div className="form-control w-24">
            <label className="label cursor-pointer font-bold">
              <span className="label-text">Published</span>
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="checkbox"
              />
            </label>
          </div>
          <div>
            <label className="label font-bold">
              <span className="label-text">Categories</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {categoriesData?.findManyCategory?.map((category) => (
                <label key={category.id} className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    value={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className="checkbox checkbox-sm"
                  />
                  <span className="label-text">{category.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    </>
  );
}
