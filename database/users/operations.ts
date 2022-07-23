import { UserSchema } from "./schema.ts";
import { db } from "../connection.ts";
import { ObjectId } from "mongo";

const userCollection = db.collection<UserSchema>("users");

export async function fetchUsers() {
  try {
    const cursor = userCollection.find();
    return await cursor.toArray();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser(id: string) {
  try {
    const user = await userCollection.findOne({ _id: new ObjectId(id) });
    return user
  } catch (error) {
    console.log(error);
  }
}


export async function deleteUser(id: string) {
    try {
      const user = await userCollection.deleteOne({ _id: new ObjectId(id) });
      return user
    } catch (error) {
      console.log(error);
    }
  }