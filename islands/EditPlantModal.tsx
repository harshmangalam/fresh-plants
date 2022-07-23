/**@jsx h */

import { h } from "preact";
import { tw } from "twind";

import EditIcon from "@icons/EditIcon.tsx";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import ImageUpload from "./ImageUpload.tsx"
interface Props {
  _id: string;
  description: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  error: {
    description: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
}
export default function EditPlantModal({
  _id,
  description,
  name,
  price,
  quantity,
  error,
  image
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        disabled={!IS_BROWSER}
        onClick={() => setOpen(true)}
        className={tw`focus:outline-none text-blue-500`}
      >
        <EditIcon />
      </button>

      {open && (
        <div
          className={tw`relative z-10`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={tw`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
          ></div>

          <div className={tw`fixed z-10 inset-0 overflow-y-auto`}>
            <div
              className={tw`flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0`}
            >
              <div
                className={tw`relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full`}
              >
                <form method="post" encType="multipart/form-data">
                  <input type="hidden" name="_id" value={_id} />
                  <div
                    className={tw`grid grid-cols-2 gap-4 bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}
                  >
                    <div className={tw`flex flex-col space-y-2 col-span-2`}>
                      <label
                        className={tw`font-normal text-gray-600`}
                        htmlFor="name"
                      >
                        Plant Name
                      </label>
                      <input
                        defaultValue={name}
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
                      <label
                        className={tw`font-normal text-gray-600`}
                        htmlFor="quantity"
                      >
                        Quantity
                      </label>
                      <input
                        defaultValue={String(quantity)}
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
                        <p className={tw`text-red-500 text-sm`}>
                          {error.quantity}
                        </p>
                      )}
                    </div>
                    <div className={tw`flex flex-col space-y-2`}>
                      <label
                        className={tw`font-normal text-gray-600`}
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        defaultValue={String(price)}
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
                        <p className={tw`text-red-500 text-sm`}>
                          {error.price}
                        </p>
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
                        defaultValue={description}
                        className={tw`${
                          error?.description
                            ? "ring-2 ring-red-400 focus:ring-red-400"
                            : "focus:ring-blue-400"
                        } outline-none px-4 py-3 border border-gray-400 rounded-md focus:ring-2`}
                        name="description"
                        id="description"
                      />
                      {error?.description && (
                        <p className={tw`text-red-500 text-sm`}>
                          {error.description}
                        </p>
                      )}
                    </div>

                    <div className={tw`flex flex-col space-y-2 col-span-2`}>
                      <label
                        className={tw`font-normal text-gray-600`}
                        htmlFor="image"
                      >
                        Plant Image
                      </label>
                      <ImageUpload name="image" image={image} />
                      {error?.image && (
                        <p className={tw`text-red-500 text-sm`}>
                          {error.image}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={tw`bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}
                  >
                    <button
                      type="submit"
                      className={tw`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm`}
                      name="_action"
                      value="edit"
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      className={tw`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
