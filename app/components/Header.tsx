"use client";
import Link from "next/link";
import { useUser, useSignOut } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export const Header = () => {
  const user = useUser();
  const signOut = useSignOut();
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-box m-2 gap-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Next.js and Drizzle Sample</a>
      </div>
      <Link className="btn btn-ghost btn-sm ml-2" href="/api/graphql">
        Apollo Explorer
      </Link>
      <div className="flex-none gap-2">
        {!user && (
          <Link href="/users">
            <button className="btn btn-primary btn-sm">Sign In</button>
          </Link>
        )}
        {user && (
          <>
            <div className="badge badge-primary p-3 mr-4">{user.name}</div>
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="btn btn-neutral btn-sm"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
