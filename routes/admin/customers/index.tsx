/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AdminLayout from "@layouts/AdminLayout.tsx";
import DeleteIcon from "@icons/DeleteIcon.tsx";
import { Status } from "http/http_status.ts";
import {
  fetchUsers,
  UserSchema,
  fetchUser,
  deleteUser,
} from "@database/index.ts";
import { deleteFile, fileUpload } from "@utils/file.ts";
export const handler: Handlers<{ error?: string; result?: UserSchema[] }> = {
  async GET(req, ctx) {
    try {
      const users = await fetchUsers();
      return ctx.render({ result: users });
    } catch (error) {
      console.log(error);
      return new Response(undefined, { status: Status.InternalServerError });
    }
  },

  async POST(req, ctx) {
    try {
      const formData = await req.formData();
      const action = formData.get("_action");
      if (action === "delete") {
        const _id = formData.get("_id") as string;
        const user = await fetchUser(_id);
        if (user) {
          await deleteUser(_id);
        }
      }

      return new Response(undefined, {
        status: Status.Found,
        headers: { location: "/admin/customers" },
      });
    } catch (error) {
      console.log(error);
      return new Response(undefined, { status: Status.InternalServerError });
    }
  },
};
export default function CustomersHome({
  data,
  url,
}: PageProps<{ error?: string; result?: UserSchema[] }>) {
  return (
    <AdminLayout pathname={url.pathname}>
      {data?.error && <p>{data.error}</p>}

      <table className={tw`w-full border mt-2`}>
        <thead className={tw`bg-gray-100`}>
          <tr>
            <th className={tw`p-4`}>Name</th>
            <th className={tw`p-4`}>Email</th>
            <th className={tw`p-4`}>Role</th>
            <th className={tw`p-4`}>Created Date</th>
            <th className={tw`p-4`}>Updated Date</th>
            <th className={tw`p-4`}>Actions</th>
          </tr>
        </thead>
        <tbody className={tw``}>
          {data.result?.map((user) => (
            <tr key={user._id} className={tw`border`}>
              <td className={tw`p-4 text-center `}>{user.name}</td>
              <td className={tw`p-4 text-center`}>{user.email}</td>
              <td className={tw`p-4 text-center`}>{user.role}</td>

              <td className={tw`p-4 text-center`}>
                {user.createdAt.toDateString()}
              </td>
              <td className={tw`p-4 text-center`}>
                {user.updatedAt.toDateString()}
              </td>

              <td className={tw`p-4`}>
                <div className={tw`flex justify-center space-x-2`}>
                  <form method="POST">
                    <input type="hidden" name="_id" value={user._id} />
                    <button
                      name="_action"
                      value="delete"
                      className={tw`focus:outline-none text-red-500`}
                    >
                      <DeleteIcon />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
