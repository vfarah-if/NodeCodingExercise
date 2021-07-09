const { CellState } = require('./CellState');

class Cell {
	constructor(state = CellState.Dead) {
		this.currentState = state;
		this.neighbours = new Array();
	}

	addNeighbours(items) {
		items?.forEach((item) => {
			this.neighbours.push(item);
		});
	}

	nextState() {
		let result = this.currentState;
		const liveNeighbours = this.neighbours.filter(
			(item) => item.currentState === CellState.Alive
		);
		const isFertile =
			liveNeighbours.length === 3 && this.currentState === CellState.Dead;
		console.log(liveNeighbours);
		if (isFertile(liveNeighbours)) {
			result = CellState.Alive;
		}
		return result;
	}
}

module.exports = Cell;
