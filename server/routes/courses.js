import { Router } from "express";
const router = Router();

router.post("/:courseId", function (req, res, next) {
  const { body, params, headers } = req;
  console.debug("headers, params, body", headers, params, body);
  const { courseId } = params;
  const { sessionId, totalModulesStudied, averageScore, timeStudied } = body;
  const userId = headers["x-user-id"];
  console.debug(
    "sessionId, totalModulesStudied, averageScore, timeStudied, userId",
    sessionId,
    totalModulesStudied,
    averageScore,
    timeStudied,
    userId
  );

  // TODO: Validate all the values
  // TODO: createOrUpdateCourse in MongoDb
  const course = {
    courseId,
    sessionId,
    totalModulesStudied,
    averageScore,
    timeStudied,
    userId,
  };

  return res.status(201).send({
    success: "true",
    message: "Course added successfully",
    course,
  });
});

router.get("/:courseId", function (req, res, next) {
  const { params, headers } = req;
  console.debug("headers, params", headers, params);
  const { courseId } = params;
  const userId = headers["x-user-id"];
  console.debug("userId", userId);

  // TODO: Validate all the values
  // TODO: getCourse in MongoDb
  const course = {
    courseId,
    userId,
  };

  return res.status(200).send({
    success: "true",
    message: "Course retrieved successfully",
    course,
  });
});

router.get("/:courseId/sessions/:sessionsId", function (req, res, next) {
  const { params, headers } = req;
  console.debug("headers, params", headers, params);
  const { courseId, sessionsId } = params;
  const userId = headers["x-user-id"];
  console.debug("userId, sessionsId", userId, sessionsId);

  // TODO: Validate all the values
  // TODO: getSessionFromCourse in MongoDb
  const course = {
    courseId,
    userId,
    sessionsId,
  };

  return res.status(200).send({
    success: "true",
    message: "Course and Session retrieved successfully",
    course,
  });
});

export default router;
