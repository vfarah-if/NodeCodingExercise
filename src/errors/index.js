import { notFound, internalServerError, badRequest } from "../responses";
import { InvalidArgumentError } from "./InvalidArgumentError";
import { NotFoundError } from "./NotFoundError";
import { ValidationError } from "./ValidationError";

export const hasValidatorErrors = (error) => {
	const regex = /"ValidatorError"/gms;
	const errorString = JSON.stringify(error);
	const result = error && error.errors && regex.test(errorString);
	return result;
};

export const customErrorHandler = (error, req, res, next) => {
	if (res.headersSent) {
		return next(error);
	}

	const errorHttpResponse = getErrorHttpResponse(error);
	console.debug("errorResponse => ", errorHttpResponse);
	res.status(errorHttpResponse.status).send(errorHttpResponse);
};

const getErrorHttpResponse = (error) => {
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

	console.error(error);
	return internalServerError();
};
