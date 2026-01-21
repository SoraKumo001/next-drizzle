import "dotenv/config";
import { schema } from "@/server/operations";
import fs from "fs";
import { printSchema } from "graphql";

const main = async () => {
  fs.writeFileSync("./codegen/schema.graphql", printSchema(schema));
};

main();
