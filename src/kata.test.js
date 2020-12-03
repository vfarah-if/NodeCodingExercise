import { kata } from "./kata";
import {
	isGreaterThanTen,
	convertArabicNumberToRomanNumeral,
	convertRomanNumeralToArabicNumber,
} from "./kata";

describe("kata", () => {
	test("should verfy the basics of what has been setup", () => {
		const actual = kata();
		expect(actual).toBeTruthy();
	});

	test("should have", () => {
		expect(isGreaterThanTen(11)).toBeTruthy();
	});

	describe("convertArabicNumberToRomanNumeral", () => {
		test(`should convert '1' to 'I'`, () => {
			const actual = convertArabicNumberToRomanNumeral(1);
			expect(actual).toBe("I");
		});

		test(`should convert '1' to 'I'`, () => {
			const actual = convertArabicNumberToRomanNumeral(2);
			expect(actual).toBe("II");
		});

		test.each([
			[1, "I"],
			[2, "II"],
			[3, "III"],
			[4, "IV"],
			[5, "V"],
			[6, "VI"],
			[7, "VII"],
			[8, "VIII"],
			[9, "IX"],
			[10, "X"],
			[11, "XI"],
		])("should convert %d to %s", (number, expected) => {
			console.debug("Converting", number, expected);
			const actual = convertArabicNumberToRomanNumeral(number);
			expect(actual).toBe(expected);
		});
	});

	describe.only("convertRomanNumeralToArabicNumber", () => {
		test("should convert I to 1", () => {
			const actual = convertRomanNumeralToArabicNumber("I");
			expect(actual).toBe(1);
		});

		test("should convert II to 2", () => {
			const actual = convertRomanNumeralToArabicNumber("II");
			expect(actual).toBe(2);
		});

		test.each([
			["I", 1],
			["II", 2],
			["III", 3],
			["IV", 4],
			["V", 5],
			["VI", 6],
			["VII", 7],
			["VIII", 8],

		])(`should convert '%s' to '%d'`, (romanNumeral, expected) => {
			console.debug(romanNumeral, expected);
			const actual = convertRomanNumeralToArabicNumber(romanNumeral);
			expect(actual).toBe(expected);
		});
	});
});
