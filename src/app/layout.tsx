import { Geist, Geist_Mono } from "next/font/google";
import { UrqlProvider } from "../providers/UrqlProvider";
import { StoreProvider } from "../providers/StoreProvider";
import { cookies, headers } from "next/headers";
import { jwtVerify } from "jose";
import type { users } from "../db/schema";
import { encrypt } from "../libs/encrypt";
import { Header } from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function getOrigin() {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol = headersList.get("via")
    ? "https"
    : (headersList.get("x-forwarded-proto") ?? "http");
  return `${protocol}://${host}`;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get token from cookies
  const token = await cookies().then((v) => v.get("auth-token")?.value);
  // Get origin for GraphQL client
  const host = await getOrigin();
  // Verify user token
  const user =
    token &&
    (await jwtVerify<{ payload: { user?: typeof users.$inferSelect } }>(
      String(token),
      new TextEncoder().encode(process.env.secret),
    )
      .then(({ payload: { user } }) => user as typeof users.$inferSelect)
      .then(({ id, name }: typeof users.$inferSelect) => ({ id, name }))
      .catch(() => undefined));

  return (
    <StoreProvider
      initState={{
        user,
      }}
    >
      <UrqlProvider
        host={host}
        // Pass encrypted token to Client Component
        token={token && encrypt(token, process.env.secret ?? "")}
      >
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div className="max-w-257 mx-auto">
              <Header />
              {children}
            </div>
          </body>
        </html>
      </UrqlProvider>
    </StoreProvider>
  );
}
