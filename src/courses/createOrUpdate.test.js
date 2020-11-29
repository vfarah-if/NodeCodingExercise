import {
  connectDatabase,
  disconnectAndDropDatabase,
  clearDatabase,
} from "../database";
import { createOrUpdate } from "./index";
import courseModel from "../models/course";
import { cloneCourse } from "../../test-utilities";

describe("createOrUpdate a course", () => {
  const validCourse = {
    courseId: "04473bf9-6ec6-47e9-be92-77b2bba9b606",
    sessionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    userId: "915a54b7-8220-4c2b-ac03-cc6edda055a5",
    stats: {
      sessionCount: 1,
      totalModulesStudied: 10,
      averageScore: 70,
      timeStudied: 4,
    },
  };

  const validCourseWithNewSession = {
    courseId: "04473bf9-6ec6-47e9-be92-77b2bba9b606",
    sessionId: "04473bf9-6ec6-47e9-be92-77b2bba9b606",
    userId: "915a54b7-8220-4c2b-ac03-cc6edda055a5",
    stats: {
      sessionCount: 1,
      totalModulesStudied: 5,
      averageScore: 8,
      timeStudied: 6,
    },
  };

  beforeAll(async () => {
    const isInMemory = true;
    await connectDatabase(isInMemory);
  });

  afterEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await disconnectAndDropDatabase();
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
    const invalidCourse = cloneCourse(validCourse);
    (invalidCourse.courseId = "NotValid"),
      await expect(() =>
        createOrUpdate(invalidCourse)
      ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when an undefined sessionId is added", async (done) => {
    const invalidCourse = cloneCourse(validCourse);
    invalidCourse.sessionId = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an invalid sessionId is added", async (done) => {
    const invalidCourse = cloneCourse(validCourse);
    invalidCourse.sessionId = "NotUUID";

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined userId is added", async (done) => {
    const invalidCourse = cloneCourse(validCourse);
    invalidCourse.userId = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should throw an error when an undefined totalModulesStudied is added", async (done) => {
    const stats = { ...validCourse.stats };
    const invalidCourse = { ...validCourse, stats };
    invalidCourse.stats.totalModulesStudied = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined averageScore is added", async (done) => {
    const invalidCourse = cloneCourse(validCourse);
    invalidCourse.stats.averageScore = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();

    done();
  });

  test("should throw an error when an undefined timeStudied is added", async (done) => {
    const invalidCourse = cloneCourse(validCourse);
    invalidCourse.stats.timeStudied = undefined;

    await expect(() =>
      createOrUpdate(invalidCourse)
    ).rejects.toThrowErrorMatchingSnapshot();
    done();
  });

  test("should create or update the course information", async () => {
    const course = cloneCourse(validCourse);
    console.debug(course);

    const actual = await createOrUpdate(course);

    expect(actual).toBeDefined();
  });

  test("should be idempotent when postring the same course twice and should reflect it already exists", async (done) => {
    const course = cloneCourse(validCourse);
    const actual = await createOrUpdate(course);
    const actualAgain = await createOrUpdate(course);

    expect(actual.courseResponse).toBeDefined();
    expect(actual.sessionResponse).toBeDefined();

    expect(actualAgain.courseResponse).toBeUndefined();
    expect(actualAgain.sessionResponse).toBeDefined();

    const { courseId, userId } = course;
    const courseCount = await courseModel.count({ courseId, userId });
    expect(courseCount).toBe(1);
    done();
  });

  test("should create one course with correct aggregate stats and two sessions", async (done) => {
    const course = cloneCourse(validCourse);
    await createOrUpdate(course);
    const courseOther = cloneCourse(validCourseWithNewSession);
    await createOrUpdate(courseOther);

    const { courseId, userId } = course;

    expect(courseId).toBe(courseOther.courseId);
    expect(userId).toBe(courseOther.userId);
    const existingCourseInDb = await courseModel.findOne({ courseId, userId });
    expect(existingCourseInDb).toBeDefined();
    const {
      sessionCount,
      totalModulesStudied,
      timeStudied,
      averageScore,
    } = existingCourseInDb.stats;
    expect(sessionCount).toBe(2);
    expect(totalModulesStudied).toBe(10 + 5);
    expect(timeStudied).toBe(4 + 6);
    expect(averageScore).toBe((70 + 8) / 2);
    done();
  });
});
