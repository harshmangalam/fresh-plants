import { config } from "dotenv";

const { MONGODB_URI } = config();

export { MONGODB_URI };
