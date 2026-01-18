import config from "../drizzle.config";
import { drizzle } from "drizzle-orm/node-postgres";

const main = async () => {
  if (config.dialect !== "postgresql")
    throw new Error("Only postgresql is supported");
  if (!("dbCredentials" in config) || !("url" in config.dbCredentials)) {
    throw new Error(
      "dbCredentials in drizzle.config.ts must have a 'url' property."
    );
  }
  const searchPath = config.migrations?.schema ?? "public";
  const db = drizzle({
    connection: {
      connectionString: config.dbCredentials.url,
      options: `--search_path=${searchPath}`,
    },
  });
  // 対象スキーマの削除
  await db.execute(`drop schema ${searchPath} cascade`).catch(() => {});
  db.$client.end();
};

main();
