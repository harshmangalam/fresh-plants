import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";

const { MONGODB_URI } = config();

export { MONGODB_URI };
