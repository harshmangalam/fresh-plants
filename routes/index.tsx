/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AppLayout from "@layouts/AppLayout.tsx";
export const handler: Handlers = {
  GET(req, ctx) {
    console.log(ctx.state.user);
    return ctx.render();
  },
};
export default function Home({ data }: PageProps) {
  return <AppLayout title="Home">
    <section>
        Plants
    </section>
  </AppLayout>;
}
