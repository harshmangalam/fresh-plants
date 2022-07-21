/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import AuthLayout from "@layouts/AuthLayout.tsx";

export default function AuthVerifyOTP() {
  return (
    <AuthLayout>
      <div className={tw`max-w-md w-full p-6 shadow-md bg-white rounded-lg`}>
        {/* login card top section  */}
        <section className={tw`flex flex-col space-y-2 items-center`}>
          <div className={tw`flex items-center space-x-3`}>
            <img className={tw`w-12 h-12`} src="/logo.svg" alt="Shop logo" />
            <h2 className={tw`text-xl font-bold`}>Fresh Shop</h2>
          </div>
        </section>

        {/* login card body section  */}

        <form method="post" className={tw`flex flex-col space-y-4 mt-6`}>
          <div className={tw`flex flex-col space-y-2`}>
            <label className={tw`font-normal text-gray-600`} htmlFor="email">
              OTP
            </label>
            <input
              className={tw`outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400`}
              type="number"
              name="otp"
              id="otp"
            />
          </div>

          <button
            className={tw`bg-blue-400 text-lg font-bold text-white rounded-md w-full py-3 focus:outline-none focus:ring focus:ring-blue-500`}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
