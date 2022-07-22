/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AdminLayout from "@layouts/AdminLayout.tsx";
import DeleteIcon from "@icons/DeleteIcon.tsx";
import EditIcon from "@icons/EditIcon.tsx";

export const handler: Handlers = {
  POST(req, ctx) {
    return ctx.render();
  },
};
export default function PlantsCreate({ data }: PageProps) {
  const fields = data?.fields;
  const error = data?.error;
  return (
    <AdminLayout>
      <form
        className={tw`grid grid-cols-2 gap-4 max-w-xl mx-auto border shadow rounded-xl p-6`}
      >
        <div className={tw`flex flex-col space-y-2 col-span-2`}>
          <label className={tw`font-normal text-gray-600`} htmlFor="name">
            Plant Name
          </label>
          <input
            defaultValue={fields?.name}
            className={tw`${
              error?.name
                ? "ring-2 ring-red-400 focus:ring-red-400"
                : "focus:ring-blue-400"
            } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
            type="name"
            name="name"
            id="name"
          />
          {error?.name && (
            <p className={tw`text-red-500 text-sm`}>{error.name}</p>
          )}
        </div>

        <div className={tw`flex flex-col space-y-2`}>
          <label className={tw`font-normal text-gray-600`} htmlFor="quantity">
            Quantity
          </label>
          <input
            defaultValue={fields?.quantity}
            className={tw`${
              error?.quantity
                ? "ring-2 ring-red-400 focus:ring-red-400"
                : "focus:ring-blue-400"
            } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
            type="number"
            name="quantity"
            id="quantity"
          />
          {error?.quantity && (
            <p className={tw`text-red-500 text-sm`}>{error.quantity}</p>
          )}
        </div>
        <div className={tw`flex flex-col space-y-2`}>
          <label className={tw`font-normal text-gray-600`} htmlFor="price">
            Price
          </label>
          <input
            defaultValue={fields?.price}
            className={tw`${
              error?.price
                ? "ring-2 ring-red-400 focus:ring-red-400"
                : "focus:ring-blue-400"
            } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
            type="number"
            name="price"
            id="price"
          />
          {error?.price && (
            <p className={tw`text-red-500 text-sm`}>{error.price}</p>
          )}
        </div>
        <div className={tw`flex flex-col space-y-2 col-span-2`}>
          <label
            className={tw`font-normal text-gray-600`}
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            rows={4}
            maxLength={255}
            defaultValue={fields?.description}
            className={tw`${
              error?.description
                ? "ring-2 ring-red-400 focus:ring-red-400"
                : "focus:ring-blue-400"
            } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
            name="description"
            id="description"
          />
          {error?.description && (
            <p className={tw`text-red-500 text-sm`}>{error.description}</p>
          )}
        </div>

        <div className={tw`flex flex-col space-y-2 col-span-2`}>
          <label className={tw`font-normal text-gray-600`} htmlFor="image">
            Plant Image
          </label>
          <input
            accept="image/*"
            type="file"
            className={tw`${
              error?.image
                ? "ring-2 ring-red-400 focus:ring-red-400"
                : "focus:ring-blue-400"
            } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
            name="image"
            id="image"
          />
          {error?.image && (
            <p className={tw`text-red-500 text-sm`}>{error.image}</p>
          )}
        </div>

        <button
          className={tw`col-span-2 bg-blue-400 text-lg font-bold text-white rounded-md w-full py-3 focus:outline-none focus:ring focus:ring-blue-500`}
        >
          Add Plant
        </button>
      </form>
    </AdminLayout>
  );
}
