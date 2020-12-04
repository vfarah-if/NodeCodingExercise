import { notFound, internalServerError, badRequest } from "../responses";

class ApplicationError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}

export class InvalidArgumentError extends ApplicationError {
	constructor(message) {
		super(message);
	}
}

export class NotFoundError extends ApplicationError {
	constructor(message) {
		super(message);
	}
}

export class ValidationError extends ApplicationError {
	constructor(message, errors) {
		super(message);
		this.errors = errors;
	}
}

export const isInvalidArgumentError = (error) =>
	error instanceof InvalidArgumentError;
export const isNotFoundError = (error) => error instanceof NotFoundError;
export const isApplicationError = (error) => error instanceof ApplicationError;
export const isValidationError = (error) => error instanceof ValidationError;

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
	if (isApplicationError(error)) {
		if (isNotFoundError(error)) {
			return notFound(error.message);
		}

		if (isValidationError(error)) {
			const { message, errors } = error;
			console.debug("For bad request", message, errors);
			return badRequest(message, errors);
		}

		if (isInvalidArgumentError) {
			return badRequest(error.message);
		}
	}
	return internalServerError();
}
