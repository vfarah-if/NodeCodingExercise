export const success = (message, data) => ({
	status: 200,
	name: "Success",
	message: message || "Succeeded",
	data,
});

export const created = (message, data) => ({
	status: 201,
	name: "Created",
    message: message || "Created",
    data,
});

export const badRequest = (message, errors) => ({
	status: 400,
	name: "BadRequestError",
	message: message || "Bad Request",
	errors,
});



export const notFound = (message) => ({
	status: 404,
	name: "NotFoundError",
	message: message || "Resource Not Found",
});


export const internalServerError = (message) => ({
	status: 500,
	name: "InternalServerError",
	message: message || "Internal Server Error",
});
