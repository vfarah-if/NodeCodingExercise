import sessionModel from "../models/session";
import { removeDatabaseProps } from "../database";
import { InvalidArgumentError, NotFoundError } from "../errors";

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
