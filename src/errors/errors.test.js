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

		test("should be able to serialize error into ValidationError object", async (done) => {
			try {
				await course.create({});
			} catch (error) {
				const actualError = new ValidationError("Test", error.errors);
				console.debug("isValidationError", actualError);
				expect(actualError).toBeTruthy();
				expect(actualError.errors).toBeTruthy();
				expect(isApplicationError(actualError)).toBeTruthy();
				done();
			}
		});
	});
});
