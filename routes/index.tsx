/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AppLayout from "@layouts/AppLayout.tsx";
import { fetchPlants, PlantSchema } from "@database/index.ts";
import PlantCard from "../components/plant/PlantCard.tsx";

interface State {
  plants?: PlantSchema[];
}
export const handler: Handlers<State> = {
  async GET(req, ctx) {
    try {
      const plants = await fetchPlants();
      return ctx.render({ plants });
    } catch (error) {
      return new Response(undefined, {
        status: 500,
      });
    }
  },
};
export default function Home({ data }: PageProps<State>) {
  const plants = data?.plants;

  return (
    <AppLayout title="Home">
      <section className={tw`grid grid-cols-1 gap-4 md:grid-cols-4`}>
        {plants?.map((plant) => (
          <PlantCard key={plant._id} {...plant} />
        ))}
      </section>
    </AppLayout>
  );
}
