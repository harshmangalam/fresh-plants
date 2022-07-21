/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AuthLayout from "@layouts/AuthLayout.tsx";
import AuthHeader from "../../components/auth/AuthHeader.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    try {
      // get form data
      const formData = await req.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      return ctx.render({ email, name, password });
    } catch (error) {
      return ctx.render({ error: { general: error.message } });
    }
  },
};
export default function AuthSignup({ data }: PageProps) {
  console.log(data);
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
              className={tw`outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400`}
              type="name"
              name="name"
              id="name"
            />
          </div>
          <div className={tw`flex flex-col space-y-2`}>
            <label className={tw`font-normal text-gray-600`} htmlFor="email">
              Email
            </label>
            <input
              className={tw`outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400`}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className={tw`flex flex-col space-y-2`}>
            <label className={tw`font-normal text-gray-600`} htmlFor="password">
              Password
            </label>
            <input
              className={tw`outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400`}
              type="password"
              name="password"
              id="password"
            />
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
