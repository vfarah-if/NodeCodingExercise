import { Promise } from "bluebird";

import courseModel from "../models/course";
import sessionModel from "../models/session";

export const createOrUpdate = (course) => {
  return new Promise(async (resolve, reject) => {
    if (!course) {
      return reject(new Error("Course is required"));
    }

    try {
      const { courseId, sessionId, userId } = course;
      let courseResponse;
      const courseExists = await courseModel.exists({ courseId });
      if (!courseExists) {
        courseResponse = await courseModel.create(course);
        console.debug(courseResponse);
      }

      const sessionExists = await sessionModel.exists({
        userId,
        sessionId,
        userId,
      });
      // NOTE: upsert not used here because validation does not work with findOneAndUpdate
      const sessionResponse = !sessionExists
        ? await sessionModel.create(course)
        : await sessionModel.updateOne({ courseId, sessionId, userId }, course);
      console.debug(sessionResponse);
      resolve({ courseResponse, sessionResponse });
    } catch (error) {
      reject(error);
    }
  });
};
