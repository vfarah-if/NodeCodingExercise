import course from "../models/course";
import { hasValidatorErrors } from "./index";
import { ValidationError } from "./ValidationError";

describe("errors", () => {
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
				const validationError = new ValidationError(
					"Test",
					error.errors
				);
				expect(validationError).toBeTruthy();
				expect(validationError.errors).toBeTruthy();
				done();
			}
		});
	});
});
