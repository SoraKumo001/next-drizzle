"use client";
import {
  NextSSRProvider,
  useCreateNextSSRExchange,
} from "@react-libraries/next-exchange-ssr";
import { type RetryExchangeOptions, retryExchange } from "@urql/exchange-retry";
import { type ReactNode, useMemo } from "react";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";
import { useUser } from "../hooks/useAuth";
import { decrypt } from "../libs/encrypt";

const isServerSide = typeof window === "undefined";
const endpoint = "/api/graphql";

const options: RetryExchangeOptions = {
  maxDelayMs: 3000,
  randomDelay: false,
};

export const UrqlProvider = ({
  children,
  cacheState,
  host,
  token,
}: {
  children: ReactNode;
  cacheState?: object;
  host?: string;
  token?: string;
}) => {
  const session = useUser();
  const nextSSRExchange = useCreateNextSSRExchange();
  const client = useMemo(() => {
    return new Client({
      url: `${host}${endpoint}`,
      fetchOptions: {
        headers: {
          "apollo-require-preflight": "true",
          cookie:
            // SSR時にtokenをデコードして認証情報を渡す
            isServerSide && token
              ? `auth-token=${decrypt(token, process.env.secret ?? "")}`
              : "",
        },
      },
      suspense: isServerSide,
      exchanges: [
        cacheExchange,
        nextSSRExchange,
        retryExchange(options),
        fetchExchange,
      ],
      preferGetMethod: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextSSRExchange, session, cacheState]);
  return (
    <Provider value={client}>
      <NextSSRProvider>{children}</NextSSRProvider>
    </Provider>
  );
};
