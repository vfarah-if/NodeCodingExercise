import { connect, disconnect } from "./index";
import mongoose from "mongoose"; 

describe("mongo in-memory  database", () => {
  describe("connect and disconnect memory mongo db integration test", () => {
    beforeAll(async() => {
      const isInMemory = true;
      await connect(isInMemory);
    });

    afterAll(async() => {
      await disconnect();
    });

    test("should have an active mongodb connection", (done) => {
      const actualConnections = mongoose.connections;      
      expect(actualConnections).toBeDefined()
      expect(actualConnections.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });
});
