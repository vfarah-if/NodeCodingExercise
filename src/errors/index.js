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

	console.error(error);
	return internalServerError();
}
