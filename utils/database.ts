import { MONGODB_URI } from "./envConfig.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.30.1/mod.ts";

const client = new MongoClient();

await client.connect(MONGODB_URI);

export { client };
