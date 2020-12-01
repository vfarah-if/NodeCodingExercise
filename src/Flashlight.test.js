import { Flashlight, ON, OFF, BLINK } from "./Flashlight";
import testData from "./Flashlight.test.json";

describe("flashlight as a class that mutates state", () => {
	const flashlight = new Flashlight();
	const states = [
		[OFF, ON],
		[ON, BLINK],
		[BLINK, OFF],
	];

	test("should default to an OFF state", () => {
		expect(flashlight.state).toBe(OFF);
	});

	test("should transition to an ON state with a press dispatch", () => {
		flashlight.press();

		expect(flashlight.state).toBe(ON);
	});

	test("should transition to a BLINKER next", () => {
		flashlight.press();

		expect(flashlight.state).toBe(BLINK);
	});

	test("should transition to an OFF next", () => {
		flashlight.press();

		expect(flashlight.state).toBe(OFF);
	});

	test("should transition all states in correct order if this had been in one test", () => {
		const sut = new Flashlight();
		expect(sut.state).toBe(OFF);

		sut.press();
		expect(sut.state).toBe(ON);

		sut.press();
		expect(sut.state).toBe(BLINK);

		sut.press();
		expect(sut.state).toBe(OFF);
	});

	// Alternative to testing this with one test
	test.each(states)(
		`should go from '%p' to '%p'`,
		(currentState, nextState) => {
			expect(flashlight.state).toBe(currentState);
			flashlight.press();
			expect(flashlight.state).toBe(nextState);
		}
	);

	// Alternative to testing this with one test
	testData.forEach((iteration) => {
		const { description, currentState, nextState } = iteration.scenario;
		console.debug('TEST CASE: ', description);
		test(description, () => {
			expect(flashlight.state).toBe(currentState);
			flashlight.press();
			expect(flashlight.state).toBe(nextState);
		});
	});
});
