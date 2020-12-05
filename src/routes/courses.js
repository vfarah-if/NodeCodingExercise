import { Router } from "express";
import { getCourse } from "../courses/getCourse";
import { getSession } from "../courses/getSession";
import { createOrUpdateCourse } from "../courses/createOrUpdateCourse";
import { success, created } from "../responses";
import { mapErrorToHttpResponse } from "../errors";

const router = Router();

router.post("/:courseId", async (req, res, next) => {
	try {
		const {
			courseId,
			sessionId,
			totalModulesStudied,
			averageScore,
			timeStudied,
			userId,
		} = extractCourseAndStatsDetails(req);

		const course = {
			courseId,
			sessionId,
			userId,
			stats: {
				sessionCount: 1,
				totalModulesStudied,
				averageScore,
				timeStudied,
			},
		};

		const response = await createOrUpdateCourse(course);
		const { courseResponse } = response;
		const successResponse = courseResponse
			? created("Course created successfully", course)
			: success("Course updated successfully", course);
		return res.status(successResponse.status).send(successResponse);
	} catch (error) {
		// next(error); // TODO: Check as a middleware
		mapErrorToHttpResponse(error, res);
	}
});

router.get("/:courseId", async (req, res, next) => {
	try {
		const { courseId, userId } = extractCourseDetails(req);
		const courseResponse = await getCourse(courseId, userId);
		const successResponse = success(
			"User Course retrieved successfully",
			courseResponse
		);
		return res.status(successResponse.status).send(successResponse);
	} catch (error) {
		// next(error); // TODO: Check as a middleware
		mapErrorToHttpResponse(error, res);
	}
});

router.get("/:courseId/sessions/:sessionId", async (req, res, next) => {
	try {
		const { courseId, sessionId, userId } = extractCourseAndSessionDetails(
			req
		);
		const session = await getSession(courseId, sessionId, userId);
		const successResponse = success(
			"Course and Session retrieved successfully",
			session
		);
		return res.status(successResponse.status).send(successResponse);
	} catch (error) {
		// next(error);
		return mapErrorToHttpResponse(error, res);
	}
});

const extractCourseDetails = (request) => {
	const { params, headers } = request;
	console.debug("headers, params", headers, params);
	const { courseId } = params;
	const userId = headers["x-user-id"];
	console.debug("courseId, userId", courseId, userId);
	return { courseId, userId };
};

const extractCourseAndSessionDetails = (request) => {
	const { courseId, userId } = extractCourseDetails(request);
	const { sessionId } = extractSessionDetails(request);
	return { courseId, sessionId, userId };
};

const extractSessionDetails = (request) => {
	console.debug("params", request.params);
	const { sessionId } = request.params;
	console.debug("sessionId", sessionId);
	return { sessionId };
};

const extractCourseAndStatsDetails = (request) => {
	const { body, params, headers } = request;
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
	return {
		courseId,
		sessionId,
		totalModulesStudied,
		averageScore,
		timeStudied,
		userId,
	};
};

export default router;
