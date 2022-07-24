/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import AdminLayout from "@layouts/AdminLayout.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    console.log(ctx.state.user);
    return ctx.render();
  },
};
export default function AdminHome({ data,url }: PageProps) {
  console.log(url)
  return (
    <AdminLayout title="Admin | Overview" pathname={url.pathname}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        omnis voluptas tempore cumque voluptatem, nemo quam quisquam! Magnam
        placeat fuga assumenda ipsam iste in, deserunt nesciunt non iusto ipsa
        consequatur!
      </div>
    </AdminLayout>
  );
}
