import { getTest } from "../../test-utilities/test-route";

describe("index or home page", () => {
  it("should get the route", async (done) => {
    const actualResponse = await getTest("/");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
