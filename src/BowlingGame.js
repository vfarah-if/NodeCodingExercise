export class BowlingGame {
	constructor() {
		this.rolls = new Array();
		this.currentRole = 0;
	}

	get score() {
		// return this.rolls.reduce((a, b) => a + b);
		let result = 0;
		for (let index = 0; index < this.rolls.length; index++) {			
			result += this.rolls[index];
		}
		return result;
	}

	roll(pins) {
		this.rolls[this.currentRole++] = pins;
	}
}
