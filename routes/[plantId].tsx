/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchPlant, PlantSchema } from "@database/index.ts";
import { showFile } from "@utils/file.ts";

interface State {
  plant?: PlantSchema;
  error?: string;
}
export const handler: Handlers<State> = {
  async GET(req, ctx) {
    try {
      const plant = await fetchPlant(ctx.params.plantId);
      if (!plant) {
        return ctx.render({ error: "Plant not found" });
      }
      return ctx.render({ plant });
    } catch (error) {
      return ctx.render({ error: "Something went wrong" });
    }
  },
};
export default function PlantItemRoute({ data, params }: PageProps<State>) {
  const plant = data?.plant;
  const error = data?.error;

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={tw`grid grid-cols-1 gap-12 md:grid-cols-2`}>
      <img
        src={showFile(plant.image)}
        className={tw`rounded-xl shadow-xl w-full h-full`}
        alt={plant.name}
      />

      <section>
        <h3 className={tw`text-xl font-medium`}>{plant.name}</h3>
        <p className={tw`mt-4 text-gray-600`}>{plant.description}</p>
        <h4 className={tw`mt-4 text-xl text-blue-400`}>Rs {plant.price}</h4>
        <button
          className={tw`mt-4 bg-blue-400 text-white font-bold px-4 py-2 rounded-md focus:outline-none hover:bg-blue-500`}
        >
          Add to cart
        </button>
      </section>
    </div>
  );
}
