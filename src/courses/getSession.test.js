import { cloneCourse } from "../../test-utilities";
import { createOrUpdateCourse, getSession } from "./index";
import { connectDatabase, disconnectAndDropDatabase } from "../database";

describe("getSession", () => {
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

  beforeAll(async () => {
    const isInMemory = true;
    await connectDatabase(isInMemory);
    const course = cloneCourse(validCourse);
    await createOrUpdateCourse(course);
  });

  afterAll(async () => {
    await disconnectAndDropDatabase();
  });

  test("should get expected session from the database", async (done) => {
    const { courseId, userId, sessionId } = validCourse;

    const actual = await getSession(courseId, sessionId, userId);

    expect(actual).toMatchSnapshot();
    done();
  });

  test("should get null when data does not exist", async (done) => {
    const actual = await getSession(
      "non-existent-client-id",
      "non-existent-session-id",
      "non-existent-userid"
    );

    expect(actual).toBeNull();
    done();
  });
});
