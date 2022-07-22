/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req,ctx){
    console.log(ctx.state.user)
    return ctx.render()
  }
};
export default function Home({ data }: PageProps) {
  return <div class={tw`p-4 mx-auto max-w-screen-md`}>Home</div>;
}
