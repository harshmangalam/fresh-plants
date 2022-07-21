import { ObjectId } from "mongo";

export interface UserSchema {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
