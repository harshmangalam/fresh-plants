/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchPlants, PlantSchema } from "@database/index.ts";
import PlantCard from "../components/plant/PlantCard.tsx";
import { useAuth } from "../context/auth.tsx";

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
  const currentUser = useAuth();

  // console.log(currentUser)
  return (
    <section className={tw`grid grid-cols-1 gap-4 md:grid-cols-4`}>
      {plants?.map((plant) => (
        <PlantCard key={plant._id} {...plant} />
      ))}
    </section>
  );
}
