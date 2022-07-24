/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import RupeesIcon from "@icons/RupeesIcon.tsx";
import { showFile } from "@utils/file.ts";
interface Props {
  _id: string;
  name: string;
  quantity: number;
  image: string;
  price: number;
  createdAt: Date;
}

export default function PlantCard({
  _id,
  createdAt,
  image,
  name,
  price,
  quantity,
}: Props) {
  return (
    <article className={tw`bg-white border shadow rounded-lg `}>
      <img
        src={showFile(image)}
        alt={name}
        className={tw`w-full h-60 object-cover`}
      />
      <div className={tw`px-2 py-4`}>
        <div className={tw`flex items-center justify-between`}>
          <p
            className={tw`flex items-center space-x-1 text-blue-500 font-medium text-xl`}
          >
            <span>
              <RupeesIcon />
            </span>
            <span>{price}</span>
          </p>
          <p
            className={tw`fbg-red-400 text-white rounded-full text-xs px-4 py-2`}
          >
            {quantity} left
          </p>
        </div>

        <h3 className={tw`truncate text-gray-600 text-lg font-medium`}>{name}</h3>
        <button className={tw`mt-4 bg-blue-400 text-white font-bold w-full px-4 py-2 rounded-md focus:outline-none hover:bg-blue-500`}>Add to cart</button>
      </div>
    </article>
  );
}
