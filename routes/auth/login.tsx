/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { matchPassword } from "@utils/password.ts";
import AuthLayout from "@layouts/AuthLayout.tsx";
import AuthHeader from "@components/auth/AuthHeader.tsx";
import { isEmpty, validateEmail } from "@utils/validations.ts";
import { UserSchema } from "@database/schemas/User.ts";
import { db } from "@database/connection.ts";
import { createJWT } from "@utils/token.ts";

type LoginFields = {
  email?: string;
  password?: string;
};

type LoginError = {
  email?: string;
  password?: string;
  general?: string;
};

type LoginResponse = {
  error?: LoginError;
  fields?: LoginFields;
};

export const handler: Handlers<LoginResponse> = {
  async POST(req, ctx) {
    try {
      // get form data
      const formData = await req.formData();

      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const error: LoginError = {};

      // check form fields validation

      if (isEmpty(email)) error.email = "Email must not be empty";
      if (isEmpty(password)) error.password = "Password must not be empty";

      // check email validations

      if (!isEmpty(email) && !validateEmail(email))
        error.email = "Email address must be valid";

      // check any error
      if (Object.keys(error).length > 0)
        return ctx.render({ error, fields: { email, password } });

      // check email exists in db or not

      const userCollection = db.collection<UserSchema>("users");

      const userSchema = await userCollection.findOne({ email });

      if (!userSchema?.email) {
        return ctx.render({
          fields: { email, password },
          error: { email: "Email address not found" },
        });
      }

      // match password

      const match = await matchPassword(password, userSchema.password);
      if (!match) {
        return ctx.render({
          fields: { email, password },
          error: { password: "Incorrect password" },
        });
      }

      // generate jwt access token
      const accessToken = await createJWT({ userId: userSchema._id });

      // redirect to home page when successfully login

      return new Response(undefined, {
        status: 302,
        headers: {
          "Set-Cookie": `access_token=${accessToken}; Secure; HttpCookie;Path=/;SameSite=Strict`,
          location: "/",
        },
      });
    } catch (error) {
      return ctx.render({ error: { general: error.message } });
    }
  },
};
export default function AuthLogin({ data }: PageProps<LoginResponse>) {
  const error = data?.error;
  const fields = data?.fields;

  return (
    <AuthLayout>
      <div className={tw`max-w-md w-full p-6 shadow-md bg-white rounded-lg`}>
        {/* login card top section  */}
        <AuthHeader
          linkHref="/auth/signup"
          linkName="Signup"
          text=" Don`t have account ?"
        />

        {/* login card body section  */}
        <section className={tw`mt-6`}>
          {error?.general && (
            <p className={tw`bg-red-200 text-red-700 px-4 py-3 rounded-lg`}>
              {error?.general}
            </p>
          )}
          <form method="post" className={tw`flex flex-col space-y-4 mt-4`}>
            <div className={tw`flex flex-col space-y-2`}>
              <label className={tw`font-normal text-gray-600`} htmlFor="email">
                Email
              </label>
              <input
                defaultValue={fields?.email}
                className={tw`${
                  error?.email
                    ? "ring-2 ring-red-400 focus:ring-red-400"
                    : "focus:ring-blue-400"
                } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
                type="email"
                name="email"
                id="email"
              />
              {error?.email && (
                <p className={tw`text-red-500 text-sm`}>{error.email}</p>
              )}
            </div>
            <div className={tw`flex flex-col space-y-2`}>
              <label
                className={tw`font-normal text-gray-600`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                defaultValue={fields?.password}
                className={tw`${
                  error?.password
                    ? "ring-2 ring-red-400 focus:ring-red-400"
                    : "focus:ring-blue-400"
                } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
                type="password"
                name="password"
                id="password"
              />
              {error?.password && (
                <p className={tw`text-red-500 text-sm`}>{error.password}</p>
              )}
            </div>

            <div className={tw`flex items-center justify-end`}>
              <a
                className={tw`text-blue-400 font-medium text-sm`}
                href="/auth/forgot-password"
              >
                Forgot Password?
              </a>
            </div>

            <button
              className={tw`bg-blue-400 text-lg font-bold text-white rounded-md w-full py-3 focus:outline-none focus:ring focus:ring-blue-500`}
            >
              Log In
            </button>
          </form>
        </section>
      </div>
    </AuthLayout>
  );
}
