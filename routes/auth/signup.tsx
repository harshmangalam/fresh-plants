/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AuthLayout from "@layouts/AuthLayout.tsx";
import AuthHeader from "@components/auth/AuthHeader.tsx";
import { isEmpty, validateEmail } from "@utils/validations.ts";
import { SignupError, SignupResponse } from "@types/auth.ts";

export const handler: Handlers<SignupResponse> = {
  async POST(req, ctx) {
    try {
      // get form data
      const formData = await req.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const error: SignupError = {};

      // check form fields validation
      if (isEmpty(name as string)) error.name = "Name must not be empty";
      if (isEmpty(email as string)) error.email = "Email must not be empty";
      if (isEmpty(password as string))
        error.password = "Password must not be empty";

      // check email validations

      if (!validateEmail(email as string))
        error.email = "Email address must be valid";

      // check any error
      if (Object.keys(error)) return ctx.render({ error });

      return ctx.render({
        result: { message: "Your account created successfully" },
      });
    } catch (error) {
      return ctx.render({ error: { general: error.message } });
    }
  },
};
export default function AuthSignup({ data }: PageProps<SignupResponse>) {
  const error = data?.error;
  return (
    <AuthLayout>
      <div className={tw`max-w-md w-full p-6 shadow-md bg-white rounded-lg`}>
        {/* login card top section  */}
        <AuthHeader
          text="Already have an account ?"
          linkName="Login"
          linkHref="/auth/login"
        />

        {/* login card body section  */}

        <form method="post" className={tw`flex flex-col space-y-4 mt-6`}>
          <div className={tw`flex flex-col space-y-2`}>
            <label className={tw`font-normal text-gray-600`} htmlFor="name">
              Name
            </label>
            <input
              className={tw`${
                error?.name
                  ? "ring-2 ring-red-400 focus:ring-red-400"
                  : "focus:ring-blue-400"
              } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2 `}
              type="name"
              name="name"
              id="name"
            />
            {error?.name && (
              <p className={tw`text-red-500 text-sm`}>{error.name}</p>
            )}
          </div>
          <div className={tw`flex flex-col space-y-2`}>
            <label className={tw`font-normal text-gray-600`} htmlFor="email">
              Email
            </label>
            <input
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
            <label className={tw`font-normal text-gray-600`} htmlFor="password">
              Password
            </label>
            <input
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

          <button
            className={tw`bg-blue-400 text-lg font-bold text-white rounded-md w-full py-3 focus:outline-none focus:ring focus:ring-blue-500`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
