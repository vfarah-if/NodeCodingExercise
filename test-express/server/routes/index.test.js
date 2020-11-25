import app from "../app";
import supertest from "supertest";
const request = supertest(app);

describe("index or home page", () => {
  it("should get the route", async (done) => {
    const actualResponse = await request.get("/");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
