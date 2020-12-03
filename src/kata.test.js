import { isGreaterThanTen } from "./kata";

describe("kata", () => {
	describe("isGreaterThanTen", () => {
		test("should be true when 11 assigned", () => {
			expect(isGreaterThanTen(11)).toBeTruthy();
		});

		test("should be false when 5 assigned", () => {
			expect(isGreaterThanTen(5)).toBeFalsy();
		});
	});
});
