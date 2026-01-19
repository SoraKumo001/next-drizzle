"use client";
import { useFindManyUserQuery } from "@/generated/graphql";
import { useSignIn } from "@/hooks/useAuth";
import Link from "next/link";

export default function Home() {
  const [{ data, fetching, error }] = useFindManyUserQuery();
  const signIn = useSignIn();

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        &larr; Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid gap-4">
        {data?.findManyUser?.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-gray-500">{user.email}</div>
            </div>
            <button
              onClick={() => signIn(user.email)}
              className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
