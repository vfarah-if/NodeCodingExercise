import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import config  from '../config';

const { defaultMongoUri } = config;
const mongod = new MongoMemoryServer();

export const connect = async (isMemoryServer = true) => {
    const uri = isMemoryServer ? await mongod.getUri() : defaultMongoUri;
    console.debug(`Connecting to MongoDB URI '${uri}'`);

    const connectionOptions = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    const result = await mongoose.connect(uri , connectionOptions);
    return result;
};

export const disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
};

export const clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}
