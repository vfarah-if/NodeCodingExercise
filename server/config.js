import dotenv from "dotenv";
const actualConfig = dotenv.config();
console.debug(".env config value", actualConfig);

export default {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
  defaultMongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/SenecaStats?safe=true',
};
