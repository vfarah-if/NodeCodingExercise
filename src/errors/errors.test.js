import course from "../models/course";
import {
	isInvalidArgumentError,
	InvalidArgumentError,
	hasValidatorErrors,
	ValidationError,
	isApplicationError,
} from "./index";

describe("errors", () => {
	describe("InvalidArgumentError", () => {
		test("should be true when using InvalidArgumentError", () => {
			const error = new InvalidArgumentError("Field is not valid");
			const actual = isInvalidArgumentError(error);
			expect(actual).toBeTruthy();
		});

		test("should be false when using standard error", () => {
			const error = new Error("Field is not valid");
			const actual = isInvalidArgumentError(error);
			expect(actual).toBeFalsy();
		});
	});

	describe("hasValidationError", () => {
		test("should be true when there is a validation error", async (done) => {
			try {
				await course.create({});
			} catch (error) {
				const actual = hasValidatorErrors(error);
				console.debug("isValidationError", actual);
				expect(actual).toBeTruthy();
				done();
			}
		});

		test("should create and serialize an application validation error as expected", async (done) => {
			try {
				await course.create({});
			} catch (error) {
				const validationError = new ValidationError("Test", error.errors);
				console.debug("isValidationError", validationError);
				expect(validationError).toBeTruthy();
				expect(validationError.errors).toBeTruthy();
				expect(isApplicationError(validationError)).toBeTruthy();
				try {
					throw validationError;	
				} catch (err) {
					console.debug("serialized error", err);
					expect(err.message).toBe("Test");
					expect(err.errors).toBe(error.errors)
				}				
			}
			done();
		});
	});
});
