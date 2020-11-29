import { connectDatabase, disconnectAndDropDatabase } from "./index";
import mongoose from "mongoose";

describe("mongo in-memory  database", () => {
  describe("connect and disconnect memory mongo db and drop database integration test", () => {
    beforeAll(async () => {
      const isInMemory = true;
      await connectDatabase(isInMemory);
    });

    afterAll(async () => {
      await disconnectAndDropDatabase();
    });

    test("should have an active mongodb connection", (done) => {
      const actualConnections = mongoose.connections;
      expect(actualConnections).toBeDefined();
      expect(actualConnections.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });
});
