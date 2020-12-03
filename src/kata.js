export function kata() {
	return true;
}

export const isGreaterThanTen = (number) => number > 10;

export const convertArabicNumberToRomanNumeral = (number) => {
	const results = {
		1: "I",
		// 2: "II",
		// 3: "III",
		4: "IV",
		5: "V",
		// 6: "VI",
		// 7: "VII",
		// 8: "VIII",
		9: "IX",
		10: "X",
		// 11: "XI"
	};
	const result = results[number];
	console.debug(result);
	if (result) {
		return result;
	}

	if (number > 10) {
		return "X" + convertArabicNumberToRomanNumeral(number - 10);
	}

	if (number > 5) {
		return "V" + convertArabicNumberToRomanNumeral(number - 5);
	}

	return results[1] + convertArabicNumberToRomanNumeral(number - 1);

	// Stage 1
	// const result = results[number];
	// console.debug(result);
	// return result;
};
