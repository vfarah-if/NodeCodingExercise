import { kata } from "./kata";
import { isGreaterThanTen } from "./kata";
import { convertArabicNumberToRomanNumeral } from "./kata";

describe("kata", () => {
	test("should verfy the basics of what has been setup", () => {
		const actual = kata();
		console.debug("Samuel was here to see", actual);
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
});
