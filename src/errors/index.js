import { notFound, internalServerError, badRequest } from "../responses";
export class InvalidArgumentError extends Error {}
export class NotFoundError extends Error {}
export class ValidationError extends Error {
	constructor(message, errors) {
		super(message);
		this.errors = errors;
	}
}

export const hasValidatorErrors = (error) => {
	// TODO: Replace with a reducer as this will be more efficient
	const regex = /"ValidatorError"/gms;
	const errorString = JSON.stringify(error);
	const result = error && error.errors && regex.test(errorString);
	return result;
};
export const getValidationErrors = (error) => error.errors;

export const mapErrorToHttpResponse = (error, res) => {
	const errorResponse = getErrorResponse(error);
	console.debug("errorResponse => ", errorResponse);
	return res.status(errorResponse.status).send(errorResponse);
};

function getErrorResponse(error) {
	if (error instanceof NotFoundError) {
		return notFound(error.message);
	}

	if (error instanceof InvalidArgumentError) {
		return badRequest(error.message);
	}

	if (error instanceof ValidationError) {
		const { message, errors } = error;
		console.debug("For bad request", message, errors);
		return badRequest(message, errors);
	}
	return internalServerError();
}
