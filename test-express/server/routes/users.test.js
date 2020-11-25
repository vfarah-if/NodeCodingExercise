import app from "../app";
import supertest from "supertest";
const request = supertest(app);

describe("users api", () => {
  it("should get the users json response", async (done) => {
    const actualResponse = await request.get("/users");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
