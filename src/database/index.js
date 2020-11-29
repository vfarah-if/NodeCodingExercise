import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import config from "../config";

const { defaultMongoUri } = config;
const mongod = new MongoMemoryServer();

export const connectDatabase = async (isMemoryServer = true) => {
  const uri = isMemoryServer ? await mongod.getUri() : defaultMongoUri;
  console.debug(`Connecting to MongoDB URI '${uri}'`);

  const connectionOptions = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
  };

  const result = await mongoose.connect(uri, connectionOptions);
  return result;
};

export const disconnectAndDropDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await disconnectDatabase();
};

export const disconnectDatabase = async () => {
  await mongoose.connection.close();
  await mongod.stop();
};

export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

export const removeDatabaseProps = (data) => {
  const result = {
    ...Object.keys(data).reduce((newProperty, key) => {
      if (!key.startsWith("_")) {
        return { ...newProperty, [key]: data[key] };
      }
      return newProperty;
    }, {}),
  };
  return result;
};
