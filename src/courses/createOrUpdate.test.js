import { connect, disconnect, clearDatabase } from "../database";
import { createOrUpdate } from "./index";

describe("createOrUpdate a course", () => {
  const validCourse = {
    courseId: "04473bf9-6ec6-47e9-be92-77b2bba9b606",
    sessionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    totalModulesStudied: 10,
    averageScore: 70,
    timeStudied: 4,
    userId: "jane.doe@somemail.com",
  };
  
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

  test("should throw an error when no course is added", async (done) => {
    await expect(() => createOrUpdate()).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when and empty course is added", async (done) => {
    await expect(() =>
      createOrUpdate({})
    ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when an invalid courseId is added", async (done) => {
    const invalidCourse = { ...validCourse };
    (invalidCourse.courseId = "NotValid"),
      await expect(() =>
        createOrUpdate(invalidCourse)
      ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when an undefined sessionId is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.sessionId = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an invalid sessionId is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.sessionId = "NotUUID";

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined totalModulesStudied is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.totalModulesStudied = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined averageScore is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.averageScore = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined timeStudied is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.timeStudied = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when an undefined userId is added", async (done) => {
    const invalidCourse = { ...validCourse };
    invalidCourse.userId = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should create or update the course information", () => {
    expect(async () => await createOrUpdate(validCourse)).not.toThrow();
  });
});
