export const success = (message) => ({
	status: 200,
	name: "Success",
	message: message || "Succeeded",
});

export const created = (message) => ({
	status: 201,
	name: "Created",
	message: message || "Created",
});

export const badRequest = (message) => ({
	status: 400,
	name: "BadRequestError",
	message: message || "Bad Request",
});

export const unauthorized = (message) => ({
    status: 401,
    name: "UnauthorizedRequestError",
	message: message || "Unauthorized",
});

export const notFound = (message) => ({
    status: 404,
    name: "NotFoundError",
	message: message || "Resource Not Found",
});

export const noContent = (message) => ({
    status: 204,
    name: "NotContentError",
	message: message || "No Data Imported",
});

export const unprocessable = (message) => ({
    status: 422,
    name: "UnprocessableError",
	message: message || "Unprocessable",
});

export const internalServerError = (message) => ({
    status: 500,
    name: "InternalServerError",
	message: message || "Internal Server Error",
});
