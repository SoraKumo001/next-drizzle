"use client";
import { useState, use } from "react";
import {
  useFindFirstPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useFindManyCategoryQuery,
  FindFirstPostQuery,
} from "../../generated/graphql";
import { useUser } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

function PostForm({
  post,
  id,
}: {
  post: NonNullable<FindFirstPostQuery["findFirstPost"]>;
  id: string;
}) {
  const user = useUser();
  const router = useRouter();
  const [{ data: categoriesData }] = useFindManyCategoryQuery();
  const [{ error: updateError }, updatePost] = useUpdatePostMutation();
  const [{}, deletePost] = useDeletePostMutation();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [published, setPublished] = useState(post.published);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    post.categories ? post.categories.map((c) => c.id) : []
  );
  const [deleteError, setDeleteError] = useState<string | null>(null);

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
    <div className="p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back to Home
      </Link>
      <div className="flex justify-between items-center mb-4 max-w-lg">
        <h1 className="text-2xl font-bold">Edit Post</h1>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete Post
        </button>
      </div>
      {updateError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {updateError.message}
        </div>
      )}
      {deleteError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Delete Error: {deleteError}
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
        <div>
          <label className="block mb-2 font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 rounded w-full h-32"
            required
          />
        </div>
        <div>
          <label className="flex items-center gap-2 font-bold">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Published
          </label>
        </div>
        <div>
          <label className="block mb-2 font-bold">Categories</label>
          <div className="flex flex-wrap gap-4">
            {categoriesData?.findManyCategory?.map((category) => (
              <label key={category.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default function EditPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [{ data: postData, fetching: fetchingPost }] = useFindFirstPostQuery({
    variables: { where: { id: { eq: id } } },
  });

  if (fetchingPost) return <div>Loading...</div>;

  if (!postData?.findFirstPost) return <div>Post not found</div>;

  return <PostForm post={postData.findFirstPost} id={id} />;
}
