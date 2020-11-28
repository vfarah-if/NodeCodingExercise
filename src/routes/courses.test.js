import { postRequestTest } from "../../test-utilities/test-route";
import { connect, disconnect, clearDatabase } from "../database";

describe("courses api", () => {
  beforeAll(async () => {
    const isInMemory = true;
    await connect(isInMemory);
  });

  afterEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await disconnect();
  });

  test("should post new courses when all data is valid", async (done) => {
    const courseId = "f4df274b-5fde-473c-a40d-7b5ffae9f8d4";
    const userId = "jane.doe@someemail.com";
    const body = {
      sessionId: "ff61a6fa-753e-42b3-8eef-076b5484fd70",
      totalModulesStudied: 9,
      averageScore: 70,
      timeStudied: 123,
    };
    const actualResponse = await postRequestTest(
      `/courses/${courseId}`,
      userId,
      body
    );
    expect(actualResponse.status).toBe(201);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });

  test("should post http 400 when course id is invalid", async (done) => {
    const courseId = undefined;
    const userId = uuid();
    const actualResponse = await postRequestTest(
      `/courses/${courseId}`,
      userId,
      undefined
    );
    expect(actualResponse.status).toBe(400);
    expect(actualResponse.text).toMatchSnapshot();
    done();
  });
});
