import { Handlers } from "$fresh/server.ts";
import { Status } from "http/http_status.ts";
import { exists, IMAGE_DIR } from "@utils/file.ts";

export const handler: Handlers = {
  async GET(req) {
    try {
      const url = new URL(req.url);
      const fileName = url.searchParams.get("file");
      const isExist = await exists(`${IMAGE_DIR}/${fileName}`);
      if (!isExist)
        return new Response("Not found", {
          status: Status.NotFound,
        });

      const file = await Deno.open(`${IMAGE_DIR}/${fileName}`, { read: true });
      const readable = file.readable;
      return new Response(readable);
    } catch (error) {
      return new Response(error, {
        status: Status.InternalServerError,
      });
    }
  },
};
