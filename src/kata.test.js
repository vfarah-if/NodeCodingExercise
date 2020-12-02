import { kata } from "./kata";

describe("kata", () => {
	test("should verfy the basics of what has been setup", () => {
		const actual = kata();
		console.debug("Samuel was here to see", actual);
		expect(actual).toBeTruthy();
	});
});
