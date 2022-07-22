import { ObjectId } from "mongo";

export enum UserRole {
  user,
  admin,
}
export interface UserSchema {
  _id?: ObjectId;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
