import courseModel from "../models/course";
import sessionModel from "../models/session";
import { removeDatabaseProps } from "../database";
import {
	hasValidatorErrors,
	InvalidArgumentError,
	NotFoundError,
	ValidationError,
	getValidationErrors,
} from "../errors";

export const createOrUpdateCourse = async (course) => {
	if (!course) throw new InvalidArgumentError("Course is required");

	const { courseId, sessionId, userId } = course;
	let courseResponse;
	let courseExists;
	({ courseExists, courseResponse } = await createCourse(
		courseId,
		userId,
		courseResponse,
		course
	));

	const sessionResponse = await createOrUpdateSession(
		userId,
		sessionId,
		course,
		courseId
	);

	if (courseExists) {
		await updateCourseAggregates(courseId, userId, sessionId);
	}

	return { courseResponse, sessionResponse };
};

export const getCourse = async (courseId, userId) => {
	if (!courseId) throw new InvalidArgumentError("courseId is required");
	if (!userId) throw new InvalidArgumentError("result is required");

	const response = await courseModel.findOne({ courseId, userId });
	if (!response) {
		throw new NotFoundError(
			`User '${userId}' not found with '${courseId}'`
		);
	}
	return removeDatabaseProps(response._doc);
};

export const getSession = async (courseId, sessionId, userId) => {
	if (!courseId) throw new InvalidArgumentError("courseId is required");
	if (!sessionId) throw new InvalidArgumentError("sessionId is required");
	if (!userId) throw new InvalidArgumentError("userId is required");

	const response = await sessionModel.findOne({
		courseId,
		sessionId,
		userId,
	});

	if (!response) {
		throw new NotFoundError(
			`User '${userId}'not found with course '${courseId} or session '${sessionId}'`
		);
	}

	return removeDatabaseProps(response._doc);
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
	const cleanedAggregateResponse = removeDatabaseProps(aggregateResponse[0]);
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
	try {
		// NOTE: upsert not used here because validation does not work with findOneAndUpdate
		const sessionResponse = !sessionExists
			? await sessionModel.create(course)
			: await sessionModel.updateOne(
					{ courseId, sessionId, userId },
					course
			  );
		console.debug(sessionResponse);
		return sessionResponse;
	} catch (error) {
		throwCustomError(error, "Unable to create or update session details");
	}
}

async function createCourse(courseId, userId, courseResponse, course) {
	const courseExists = await courseModel.exists({ courseId, userId });
	if (!courseExists) {
		try {
			courseResponse = await courseModel.create(course);
			console.debug(courseResponse);
		} catch (error) {
			throwCustomError(error, "Unable to create course details");
		}
	}
	return { courseExists, courseResponse };
}

function throwCustomError(error, errorMessage) {
	if (hasValidatorErrors(error)) {
		console.debug("Threw up a validation error");
		throw new ValidationError(errorMessage, getValidationErrors(error));
	}
	throw error;
}
