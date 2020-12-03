import { convertLatinNumberToRomanNumerals } from "./romanNumeralKata";

describe("convertLatinNumberToRomanNumerals", () => {
	test("should convert 1 to I", () => {
		const actual = convertLatinNumberToRomanNumerals(1);

		expect(actual).toBe("I");
	});

	test("should convert '2' to 'II'", () => {
		const actual = convertLatinNumberToRomanNumerals(2);

		expect(actual).toBe("II");
	});

	test("should convert '3' to 'III'", () => {
		const actual = convertLatinNumberToRomanNumerals(3);

		expect(actual).toBe("III");
	});
});
