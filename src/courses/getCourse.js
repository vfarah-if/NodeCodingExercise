import courseModel from "../models/course";
import { removeDatabaseProps } from "../database";
import { InvalidArgumentError, NotFoundError } from "../errors";

export const getCourse = async (courseId, userId) => {
	if (!courseId) throw new InvalidArgumentError("courseId is required");
	if (!userId) throw new InvalidArgumentError("result is required");

	const response = await courseModel.findOne({ courseId, userId });
	if (!response) {
		throw new NotFoundError(
			`User '${userId}' not found with course '${courseId}'`
		);
	}
	return removeDatabaseProps(response._doc);
};
