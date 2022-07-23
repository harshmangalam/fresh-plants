import { MONGODB_URI } from "@utils/envConfig.ts";
import { MongoClient, Database } from "mongo";

let db: Database;
async function createMongodbConnection() {
  try {
    // init  client
    const client = new MongoClient();
    await client.connect(MONGODB_URI);
    console.log("mongodb connected");

    db = client.database("fresh-shop");
  } catch (error) {
    console.log(error);
  }
}

export { db, createMongodbConnection };
