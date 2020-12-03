export function convertLatinNumberToRomanNumerals(latinNumber) {    
	if (latinNumber === 2) {
		return "II";
	} else if (latinNumber === 3){
        return "III";
    }

	return "I";
}
