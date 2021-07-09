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
		const liveNeighbours = this.neighbours.filter(
			(neighbour) => neighbour.currentState === CellState.Alive
		);

		const isFertile =
			this.currentState === CellState.Dead && liveNeighbours.length === 3;
		const isThriving =
			(this.currentState === CellState.Alive && liveNeighbours.length) === 2;
		if (isFertile || isThriving) {
			return CellState.Alive;
		}
		const isOverpopulated = liveNeighbours.length > 3;
		const isUnderpopulated = liveNeighbours.length < 2;
		if (isUnderpopulated || isOverpopulated) {
			return CellState.Dead;
		}

		return this.currentState;
	}

	toString() {
		return this.currentState === CellState.Alive ? 'X' : ' ';
	}
}

module.exports = Cell;
