import {
  postRequestTest,
  getRequestTest,
} from "../../test-utilities/test-route";
import {
  connectDatabase,
  disconnectAndDropDatabase,
  clearDatabase,
} from "../database";

describe("courses api", () => {
  beforeAll(async () => {
    const isInMemory = true;
    await connectDatabase(isInMemory);
  });

  afterAll(async () => {
    await disconnectAndDropDatabase();
  });

  describe("post", () => {
    afterEach(async () => {
      await clearDatabase();
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
      const userId = "jane.doe@someemail.com";
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

  describe("get course", () => {
    test("should get non-existent course with 404 notfound", async (done) => {
      const courseId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      const userId = "jane.doe@someemail.com";
      const nonExistentCourseResponse = await getRequestTest(
        `/courses/${courseId}`,
        userId
      );
      expect(nonExistentCourseResponse.status).toBe(404);
      done();
    });

    test("should get a posted record with 200 response", async (done) => {
      const courseId = "f4df274b-5fde-473c-a40d-7b5ffae9f8d4";
      const userId = "jane.doe@someemail.com";
      const body = {
        sessionId: "ff61a6fa-753e-42b3-8eef-076b5484fd70",
        totalModulesStudied: 9,
        averageScore: 70,
        timeStudied: 123,
      };
      await postRequestTest(`/courses/${courseId}`, userId, body);

      const actualResponse = await getRequestTest(
        `/courses/${courseId}`,
        userId
      );

      expect(actualResponse.status).toBe(200);
      expect(actualResponse.text).toMatchSnapshot();
      done();
    });
  });

  describe("get course and session", () => {
    test("should get non-existent course with 404 notfound", async (done) => {
      const courseId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      const userId = "jane.doe@someemail.com";
      const sessionId = "ff61a6fa-753e-42b3-8eef-076b5484fd70";
      const nonExistentCourseResponse = await getRequestTest(
        `/courses/${courseId}/sessions/${sessionId}`,
        userId
      );
      expect(nonExistentCourseResponse.status).toBe(404);
      done();
    });

    test("should get a posted record with 200 response", async (done) => {
      const courseId = "f4df274b-5fde-473c-a40d-7b5ffae9f8d4";
      const userId = "jane.doe@someemail.com";
      const sessionId = "ff61a6fa-753e-42b3-8eef-076b5484fd70";
      const body = {
        sessionId,
        totalModulesStudied: 9,
        averageScore: 70,
        timeStudied: 123,
      };
      await postRequestTest(`/courses/${courseId}`, userId, body);

      const actualResponse = await getRequestTest(
        `/courses/${courseId}/sessions/${sessionId}`,
        userId
      );

      expect(actualResponse.status).toBe(200);
      expect(actualResponse.text).toMatchSnapshot();
      done();
    });
  });
});
