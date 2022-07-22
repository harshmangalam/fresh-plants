import { create, verify } from "djwt";
import { JWT_SECRET } from "@utils/envConfig.ts";

const ALGO = "HS512";
export async function createJWT(payload: any) {
  return await create({ alg: ALGO, typ: "JWT" }, payload, JWT_SECRET);
}

export async function verifyJWT(jwt: string) {
  const payload = await verify(jwt, JWT_SECRET, ALGO);
  return payload.userId as string;
}
