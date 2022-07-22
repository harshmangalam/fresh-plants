/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AdminLayout from "@layouts/AdminLayout.tsx";
import DeleteIcon from "@icons/DeleteIcon.tsx";
import EditIcon from "@icons/EditIcon.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    console.log(ctx.state.user);
    return ctx.render();
  },
};
export default function ProductsHome({ data }: PageProps) {
  return (
    <AdminLayout>
      <div className={tw`flex justify-between`}>
        <a href="plants/create" className={tw`bg-blue-400 text-white rounded-md px-4 py-2 font-bold focus:ring-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none`}>
          Add Plant
        </a>
      </div>
      <table className={tw`w-full border mt-2`}>
        <thead className={tw`bg-gray-100`}>
          <tr>
            <th className={tw`p-4`}>Image</th>
            <th className={tw`p-4`}>Title</th>
            <th className={tw`p-4`}>Quantity</th>
            <th className={tw`p-4`}>Price</th>
            <th className={tw`p-4`}>Create Date</th>
            <th className={tw`p-4`}>Updated Date</th>
            <th className={tw`p-4`}>Actions</th>
          </tr>
        </thead>
        <tbody className={tw``}>
          {plants.map((plant) => (
            <tr key={plant._id} className={tw`border`}>
              <td className={tw`p-4 grid place-items-center`}>
                <img
                  src={plant.image}
                  alt={plant.title}
                  className={tw`w-16 h-16 rounded-full`}
                />
              </td>
              <td className={tw`p-4 text-center `}>{plant.title}</td>
              <td className={tw`p-4 text-center`}>{plant.quantity}</td>
              <td className={tw`p-4 text-center`}>{plant.price}</td>
              <td className={tw`p-4 text-center`}>{plant.createdAt}</td>
              <td className={tw`p-4 text-center`}>{plant.updatedAt}</td>

              <td className={tw`p-4`}>
                <div className={tw`flex justify-center space-x-2`}>
                  <button
                    className={tw`focus:outline-none text-blue-500`}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className={tw`focus:outline-none text-red-500`}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

const plants = [
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    _id: 12,
    image:
      " https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_695x695.jpg?v=1634213151",
    title: "Plant title small",

    quantity: 34,
    price: 345,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
];
