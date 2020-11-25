import { getFetch } from "./shared";

describe("users api", () => {
  it("should get the users json response", async (done) => {
    const actualResponse = await getFetch("/users");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
