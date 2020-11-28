import { Promise } from "bluebird";

import courseModel from "../models/course";
import sessionModel from "../models/session";

export const createOrUpdate = (course) => {
  return new Promise(async (resolve, reject) => {
    if (!course) {
      return reject(new Error("Course is required"));
    }

    try {
      // TODO: Check if course already exists
      const courseResponse = await courseModel.create(course);
      // TODO: Check if session already exists and Upsert
      const sessionResponse = await sessionModel.create(course);
      resolve({ courseResponse, sessionResponse });
    } catch (error) {
      reject(error);
    }
  });
};
