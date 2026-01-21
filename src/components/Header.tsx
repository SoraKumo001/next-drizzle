"use client";
import Link from "next/link";
import { useUser, useSignOut } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useSeedsMutation } from "../generated/graphql";
import { useClearUrqlCache } from "@/providers/UrqlProvider";

export const Header = () => {
  const user = useUser();
  const signOut = useSignOut();
  const router = useRouter();
  const [{ fetching }, seeds] = useSeedsMutation();
  const clearUrqlCache = useClearUrqlCache();

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-box m-2 gap-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Next.js and Drizzle Sample</a>
      </div>
      <div className="flex gap-2 mr-4">
        <Link className="btn btn-ghost btn-sm" href="/api/graphql">
          Apollo Explorer
        </Link>
        <div
          className="tooltip tooltip-bottom"
          data-tip="Reset Seed Data"
        >
          <button
            className="btn btn-warning btn-outline btn-sm"
            disabled={fetching}
            onClick={async () => {
              if (
                confirm("This will reset all data and seed the database. Are you sure?")
              ) {
                await seeds({}).then(clearUrqlCache);
                alert("Seed data has been reset.");
              }
            }}
          >
            {fetching && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
            Reset Seed
          </button>
        </div>
      </div>
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