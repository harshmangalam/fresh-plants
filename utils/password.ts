import * as bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password);
}

export async function matchPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
