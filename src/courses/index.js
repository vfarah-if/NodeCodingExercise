import { Promise } from "bluebird";

import courseModel from "../models/course";
import sessionModel from "../models/session";
import { removeDatabaseProps } from "../database";

export const createOrUpdate = (course) => {
  return new Promise(async (resolve, reject) => {
    if (!course) reject(new Error("Course is required"));

    try {
      const { courseId, sessionId, userId } = course;
      let courseResponse;
      let courseExists;
      ({ courseExists, courseResponse } = await createCourse(courseId, userId, courseResponse, course));

      const sessionResponse = await createOrUpdateSession(userId, sessionId, course, courseId);

      if (courseExists) {
        await updateCourseAggregates(courseId, userId, sessionId);
      }

      resolve({ courseResponse, sessionResponse });
    } catch (error) {
      reject(error);
    }
  });
};

export const getCourse = (courseId, userId) => {
  return new Promise(async (resolve, reject) => {
    if (!courseId) reject(new Error("courseId is required"));
    if (!userId) reject(new Error("userId is required"));
    const response = await courseModel.findOne({ courseId, userId });
    if (response) {
      const cleanedResponse = removeDatabaseProps(response._doc);
      console.debug("Returning", cleanedResponse);
      resolve(cleanedResponse);
    } else {
      resolve(null);
    }
  });
};

export const getSession = (courseId, sessionId, userId) => {
  return new Promise(async (resolve, reject) => {
    if (!courseId) reject(new Error("courseId is required"));
    if (!sessionId) reject(new Error("sessionId is required"));
    if (!userId) reject(new Error("userId is required"));
    const response = await sessionModel.findOne({
      courseId,
      sessionId,
      userId,
    });
    if (response) {
      const cleanedResponse = removeDatabaseProps(response._doc);
      resolve(cleanedResponse);
    } else {
      resolve(null);
    }
  });
};


async function updateCourseAggregates(courseId, userId, sessionId) {
  const aggregateQuery = [
    { $match: { courseId, userId } },
    {
      $group: {
        _id: "$courseId",
        sessionCount: { $sum: 1 },
        totalModulesStudied: { $sum: "$stats.totalModulesStudied" },
        timeStudied: { $sum: "$stats.timeStudied" },
        averageScore: { $avg: "$stats.averageScore" },
      },
    },
  ];
  const aggregateResponse = await sessionModel.aggregate(aggregateQuery);
  const cleanedAggregateResponse = removeDatabaseProps(
    aggregateResponse[0]
  );
  console.debug("AGGREGATE Result", cleanedAggregateResponse);
  await courseModel.updateOne(
    { courseId, userId },
    { courseId, sessionId, userId, stats: cleanedAggregateResponse }
  );
}

async function createOrUpdateSession(userId, sessionId, course, courseId) {
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
  return sessionResponse;
}

async function createCourse(courseId, userId, courseResponse, course) {
  const courseExists = await courseModel.exists({ courseId, userId });
  if (!courseExists) {
    courseResponse = await courseModel.create(course);
    console.debug(courseResponse);
  }
  return { courseExists, courseResponse };
}

