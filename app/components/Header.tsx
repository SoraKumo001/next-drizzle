"use client";
import Link from "next/link";
import { useUser, useSignOut } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export const Header = () => {
  const user = useUser();
  const signOut = useSignOut();
  const router = useRouter();
  return (
    <div className="flex items-center m-2 h-8">
      <div>Next.js and Drizzle Sample</div>
      {!user && (
        <Link href="/users">
          <button className="btn h-8 flex items-center bg-blue-300 rounded m-2 p-2">
            Sign In
          </button>
        </Link>
      )}
      {user && (
        <>
          <button
            onClick={() => {
              signOut();
              router.push("/");
            }}
            className="btn flex items-center bg-gray-300 rounded m-2 p-2 hover:bg-gray-400"
          >
            Sign Out
          </button>
          <div className="flex items-center bg-blue-300 rounded m-2 p-2">
            {user?.name}
          </div>
        </>
      )}
      <Link className="link-primary ml-auto" href="/api/graphql">
        Apollo Explorer
      </Link>
    </div>
  );
};
