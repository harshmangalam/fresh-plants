import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.148.0/http/cookie.ts";
import { verifyJWT } from "@utils/token.ts";
import { db } from "@database/connection.ts";
import { UserSchema } from "@database/index.ts";
import { ObjectId } from "mongo";
export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  try {
    // parse all cookies
    const cookies = getCookies(req.headers);
    // get access token cookies
    const accessToken = cookies["access_token"];

    if (accessToken) {
      // verify jwt token
      const userId = await verifyJWT(accessToken);
      if (userId) {
        const users = db.collection<UserSchema>("users");
        const user = await users.findOne({ _id: new ObjectId(userId) });

        ctx.state.currentUser = { ...user, password: undefined };
      }
    }

    const resp = await ctx.next();
    return resp;
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
}
