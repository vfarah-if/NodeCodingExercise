import { getFetch } from "./shared";

describe("index or home page", () => {
  it("should get the route", async (done) => {
    const actualResponse = await getFetch("/");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
