import "dotenv/config";
import fs from "fs";
import { printSchema } from "graphql";
import { schema } from "../app/server/builder";

const main = async () => {
  fs.writeFileSync("./codegen/schema.graphql", printSchema(schema));
};

main();
