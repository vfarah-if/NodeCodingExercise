import { getRequestTest } from "../../test-utilities/test-route";

describe("users api", () => {
  it("should get the users json response", async (done) => {
    const actualResponse = await getRequestTest("/users");
    expect(actualResponse).toBeTruthy();
    expect(actualResponse.status).toBe(200);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
