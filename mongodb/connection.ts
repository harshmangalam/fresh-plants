import { MONGODB_URI } from "../utils/envConfig.ts";
import { MongoClient } from "mongo";

let client;
async function createMongodbConnection() {
  try {
    client = new MongoClient();
    await client.connect(MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
}

export { client, createMongodbConnection };
