export const convertArabicNumberToRomanNumeral = (number) => {
  const results = {
    1: 'I',
    // 2: "II",
    // 3: "III",
    4: 'IV',
    5: 'V',
    // 6: "VI",
    // 7: "VII",
    // 8: "VIII",
    9: 'IX',
    10: 'X',
    // 11: "XI"
  };
  const result = results[number];
  // console.debug(result);
  if (result) {
    return result;
  }

  if (number > 10) {
    return 'X' + convertArabicNumberToRomanNumeral(number - 10);
  }

  if (number > 5) {
    return 'V' + convertArabicNumberToRomanNumeral(number - 5);
  }

  return results[1] + convertArabicNumberToRomanNumeral(number - 1);

  // Stage 1
  // const result = results[number];
  // console.debug(result);
  // return result;
};

export const convertRomanNumeralToArabicNumber = (romanNumeral) => {
  // Stage 1
  // if (romanNumeral === "I") {
  // 	return 1;
  // } else {
  // 	return 2;
  // }

  // Stage 2
  // switch (romanNumeral) {
  // 	case "I":
  // 		return 1;
  // 	case "II":
  // 		return 2;
  // 	case "III":
  // 		return 3;
  // 	default:
  // 		break;
  // }

  // Stage 3
  // const mappings = {
  // 	I: 1,
  // 	II: 2,
  //  III: 3,
  //  IV: 4,
  //  V: 5,
  //  VI: 6,
  // };
  // const result = mappings[romanNumeral];
  // return result;

  // Stage 4 and 5
  const mappings = {
    I: 1,
    // II: 2,
    // III: 3,
    IV: 4,
    V: 5,
    // VI: 6,
    // VII: 7,
    // VIII: 8,
  };

  const result = mappings[romanNumeral];
  if (result) {
    return result;
  }

  if (romanNumeral.startsWith('V')) {
    return 5 + convertRomanNumeralToArabicNumber(romanNumeral.slice(1));
  }

  const removeFirstChar = romanNumeral.slice(1);
  //   console.debug(removeFirstChar);
  return 1 + convertRomanNumeralToArabicNumber(removeFirstChar);
};
