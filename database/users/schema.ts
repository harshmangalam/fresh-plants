export interface UserSchema {
  _id: string;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
}

export enum UserRole {
  user,
  admin,
}
