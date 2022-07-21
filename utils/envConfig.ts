import { config } from "dotenv";

const { MONGODB_URI,JWT_SECRET } = config();

export { MONGODB_URI,JWT_SECRET };
