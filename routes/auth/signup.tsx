/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AuthLayout from "@layouts/AuthLayout.tsx";
import AuthHeader from "@components/auth/AuthHeader.tsx";
import { isEmpty, validateEmail } from "@utils/validations.ts";
import { hashPassword } from "@utils/password.ts";

import { db } from "@database/connection.ts";
import { UserRole, UserSchema } from "@database/schemas/User.ts";
type SignupFields = {
  name?: string;
  email?: string;
  password?: string;
};

type SignupError = {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
};

type SignupResponse = {
  error?: SignupError;
  fields?: SignupFields;
};

export const handler: Handlers<SignupResponse> = {
  async POST(req, ctx) {
    try {
      // get form data
      const formData = await req.formData();
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const error: SignupError = {};

      // check form fields validation
      if (isEmpty(name)) error.name = "Name must not be empty";
      if (isEmpty(email)) error.email = "Email must not be empty";
      if (isEmpty(password)) error.password = "Password must not be empty";

      // check email validations

      if (!validateEmail(email)) error.email = "Email address must be valid";

      // check any error
      if (Object.keys(error).length > 0)
        return ctx.render({ error, fields: { name, email, password } });

      // verify duplicate email address

      const userCollection = db.collection<UserSchema>("users");

      const userSchema = await userCollection.findOne({ email });

      if (userSchema?.email) {
        return ctx.render({
          fields: { email, name, password },
          error: { email: "Email address already exists" },
        });
      }

      const hash = await hashPassword(password);
      // create new user
      const newUser = await userCollection.insertOne({
        name,
        email,
        password: hash,
        role: UserRole.user,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (!newUser) {
        return ctx.render({
          fields: { name, email, password },
          error: { general: "Error while creating your account try again" },
        });
      }

      // redirect to login page when successfully registered
      return new Response(undefined, {
        status: 302,
        headers: {
          location: "/auth/login",
        },
      });
    } catch (error) {
      return ctx.render({ error: { general: error.message } });
    }
  },
};
export default function AuthSignup({ data }: PageProps<SignupResponse>) {
  const error = data?.error;
  const fields = data?.fields;
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
        <section className={tw`mt-6`}>
          {error?.general && (
            <p className={tw`bg-red-200 text-red-700 px-4 py-3 rounded-lg`}>
              {error?.general}
            </p>
          )}
          <form method="post" className={tw`flex flex-col space-y-4 mt-4`}>
            <div className={tw`flex flex-col space-y-2`}>
              <label className={tw`font-normal text-gray-600`} htmlFor="name">
                Name
              </label>
              <input
                defaultValue={fields?.name}
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

            <button
              className={tw`bg-blue-400 text-lg font-bold text-white rounded-md w-full py-3 focus:outline-none focus:ring focus:ring-blue-500`}
            >
              Sign Up
            </button>
          </form>
        </section>
      </div>
    </AuthLayout>
  );
}
