"use client";
import { useState } from "react";
import {
  useCreateOnePostMutation,
  useFindManyCategoryQuery,
} from "../../generated/graphql";
import { useUser } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPost() {
  const user = useUser();
  const router = useRouter();
  const [, createPost] = useCreateOnePostMutation();
  const [{ data: categoriesData }] = useFindManyCategoryQuery();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    await createPost({
      input: {
        title,
        content,
        authorId: user.id,
        published,
        categories: {
          set: selectedCategories.map((id) => ({ id })),
        },
      },
    });
    router.push("/");
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
        <div>Please sign in to create a post.</div>
        <Link href="/users" className="text-blue-500 hover:underline">
          Go to Users page
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link href="/" className="btn btn-ghost btn-sm mb-4">
        &larr; Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg form-control">
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
        <button
          type="submit"
          className="btn btn-primary"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
