import dotenv from "dotenv";
const actualConfig = dotenv.config();
console.debug(".env config value", actualConfig);

export default {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
};
