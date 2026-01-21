import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./relations";
import { getEnvVariable } from "../libs/getEnvVariable";
import { format } from "sql-formatter";

// Database connection string from environment variables
const connectionString = getEnvVariable("DATABASE_URL");

// Extract schema name from connection string (defaults to "public")
const url = new URL(connectionString);
const searchPath = url.searchParams.get("schema") ?? "public";

// Initialize Drizzle ORM client with PostgreSQL connection
// Includes custom query logger for debugging SQL statements
export const db = drizzle({
  connection: {
    connectionString,
    options: `--search_path=${searchPath}`,
  },
  relations,
  logger: {
    logQuery: (query, params) => {
      const formattedParams = params.map((value, index) => {
        const stringValue =
          typeof value === "string" ? `'${value}'` : String(value);
        return `${stringValue} /*$${index + 1}*/`;
      });
      console.info(
        `--\n${format(query, {
          language: "postgresql",
          keywordCase: "upper",
          expressionWidth: 100,
          params: Object.fromEntries(formattedParams.map((p, i) => [i + 1, p])),
        })};
      `);
    },
  },
});
