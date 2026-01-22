"use client";
import { useFindManyUserQuery } from "@/generated/graphql";
import { useSignIn } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const context = { additionalTypenames: ["User"] };

export default function Users() {
  const [{ data, fetching, error }, executeQuery] = useFindManyUserQuery({
    context,
  });
  const signIn = useSignIn();
  const router = useRouter();

  return (
    <>
      <title>Users</title>
      <div className="container mx-auto p-4 max-w-5xl">
        <Link href="/" className="btn btn-link no-underline pl-0 mb-4">
          &larr; Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-bold">Users</h1>
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

        {error ? (
          <div className="alert alert-error my-4">
            <span className="material-symbols-outlined">error</span>
            <span>Error: {error.message}</span>
          </div>
        ) : fetching && !data ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.findManyUser?.map((user) => (
              <div
                key={user.id}
                className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md hover:border-base-300 transition-all"
              >
                <div className="card-body flex flex-row items-center gap-4">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-xl font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2
                        className="card-title text-lg truncate"
                        title={user.name}
                      >
                        {user.name}
                      </h2>
                      {user.postsCount !== undefined && (
                        <div className="badge badge-secondary badge-sm">
                          {user.postsCount} posts
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-base-content/70 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end p-4 pt-0">
                  <button
                    onClick={async () => {
                      await signIn(user.email);
                      router.push("/");
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!fetching && !error && data?.findManyUser?.length === 0 && (
          <div className="text-center py-10 text-base-content/50">
            <p>No users found.</p>
          </div>
        )}
      </div>
    </>
  );
}
