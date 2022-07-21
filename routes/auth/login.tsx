/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import AuthLayout from "@layouts/AuthLayout.tsx";
import AuthHeader from "../../components/auth/AuthHeader.tsx";

export default function AuthLogin() {
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

        <form method="post" className={tw`flex flex-col space-y-4 mt-6`}>
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
      </div>
    </AuthLayout>
  );
}
