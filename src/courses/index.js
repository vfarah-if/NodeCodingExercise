import { Promise } from "bluebird";

import courseModel from "../models/course";
import sessionModel from "../models/session";

export const createOrUpdate = (course) => {
  return new Promise(async (resolve, reject) => {
    if (!course) {
      return reject(new Error("Course is required"));
    }

    try {
      const courseResponse = await courseModel.create(course);
      const sessionResponse = await sessionModel.create(course);
      resolve({ courseResponse, sessionResponse });
    } catch (error) {
      reject(error);
    }
  });
};
