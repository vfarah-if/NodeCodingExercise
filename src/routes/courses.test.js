import { uuid } from "uuidv4";

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
    const courseId = uuid();
    const userId = uuid();
    const body = {
      sessionId: uuid(),
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
