import { removeDatabaseProps } from "./index";

describe("removeDatabaseProps", () => {
  test("should remove private underscore values from an object without mutating data", () => {
    const testObject = {
      _id: "5fc2f9bf9a9bdb5c8468fc5f",
      courseId: "04473bf9-6ec6-47e9-be92-77b2bba9b606",
      sessionId: 0,
      stats: {
        totalModulesStudied: 5,
        averageScore: 70,
        timeStudied: 20,
      },
      intList:[1,2,3],
      __v: 0,
    };

    const cleanedObject = removeDatabaseProps(testObject);
    console.debug(cleanedObject);
    expect(testObject).not.toEqual(cleanedObject);
    expect(cleanedObject._id).toBeUndefined();
    expect(cleanedObject.__v).toBeUndefined();
    expect(cleanedObject.courseId).toBeDefined();
    expect(cleanedObject.sessionId).toBeDefined();
    expect(cleanedObject.intList).toBeDefined();
  });
});
