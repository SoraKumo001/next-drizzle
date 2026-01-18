import config from "../drizzle.config";
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import path from "path";
import { pathToFileURL } from "node:url";
import { sql } from "drizzle-orm";
import { getTableConfig, type PgTable } from "drizzle-orm/pg-core";
import { isTable } from "drizzle-orm";

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
  if (!config.schema) throw new Error("schema is not set");
  const schema = await Promise.all(
    (Array.isArray(config.schema) ? config.schema : [config.schema]).map((s) =>
      import(pathToFileURL(path.resolve(s)).href).then((v) => v)
    )
  );
  const s = Object.assign({}, ...schema);
  await db.transaction(async (tx) => {
    // drizzle-seedのresetはスキーマ名が巻き込まれるため、相当のものを独自に実装
    await db.execute(
      sql.raw(
        `truncate ${Object.values(s)
          .filter((t) => isTable(t))
          .map((t) => `"${getTableConfig(t as PgTable).name}"`)
          .join(",")} cascade;`
      )
    );
    await seed(tx, s);
  });
  await db.$client.end();
};
main();
