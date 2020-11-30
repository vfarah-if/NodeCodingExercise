import { getRequestTest } from "../../test-utilities/test-route.js";

describe("index or home page", () => {
  it("should get the route", async (done) => {
    const actualResponse = await getRequestTest("/");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
