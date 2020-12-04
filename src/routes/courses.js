import { Router } from "express";
import { createOrUpdateCourse, getCourse, getSession } from "../courses";
const router = Router();

router.post("/:courseId", async (req, res, next) => {
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

	try {
		const response = await createOrUpdateCourse(course);
		const { courseResponse } = response;
		return res.status(courseResponse ? 201 : 200).send({
			success: "true",
			message: "Course created successfully",
			course,
		});
	} catch (error) {
		console.error(error);
		// TODO: Better Error Handling
		return res.status(400).send({
			success: "false",
			message: "Course creation failed",
			error,
		});
	}
});

router.get("/:courseId", async (req, res, next) => {
	try {
		const { courseId, userId } = extractCourseDetails(req);
		const courseResponse = await getCourse(courseId, userId);
		return res.status(!courseResponse ? 404 : 200).send({
			success: "true",
			message: "User Course retrieved successfully",
			course: courseResponse,
		});
	} catch (error) {
		console.error(error);
		// TODO: Better Error Handling
		return res.status(400).send({
			success: "fail",
			message: "Failed to get course",
			error,
		});
	}
});

router.get("/:courseId/sessions/:sessionId", async (req, res, next) => {
	try {
		const { 
			courseId, 
			sessionId, 
			userId 
		} = extractCourseAndSessionDetails(req);
		const session = await getSession(courseId, sessionId, userId);
		return res.status(!session ? 404 : 200).send({
			success: "true",
			message: "Course and Session retrieved successfully",
			session,
		});
	} catch (error) {
		console.error(error);
		// TODO: Better Error Handling
		return res.status(400).send({
			success: "false",
			message: "Failed to retrieve Course and Session",
			error,
		});
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
