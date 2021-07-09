const os = require('os');

const Cell = require('./cell');
const { CellState } = require('./CellState');

class Generator {
	constructor(size, positions = Array()) {
		this.size = size;
		this.board = Array.from(Array(size), () => new Array(size));
		this.nextStates = Array.from(Array(size), () => new Array(size));
		this.initialiaseBoard();
		this.setupNeighbours();
		this.seed(positions);
	}

	initialiaseBoard() {
		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				this.board[y][x] = new Cell();
			}
		}
	}

	setupNeighbours() {
		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				const cell = this.board[y][x];
				const neighbours = this.getNeighbours(x, y);
				cell.addNeighbours(neighbours);
			}
		}
	}

	getNeighbours(x, y) {
		const yRange = [y - 1, y, y + 1];
		const xRange = [x - 1, x, x + 1];
		const neighbours = Array();
		yRange.forEach((row) => {
			xRange.forEach((col) => {
				if ((row !== y || col !== x) && this.isOnBoard(col, row)) {
					neighbours.Append(this.board[row][col]);
				}
			});
		});
		return neighbours;
	}

	isOnBoard(x, y) {
		return x >= 0 < this.size && y >= 0 < self.size;
	}

	seed(positions) {
		positions.forEach((position) => {
			const { x, y } = position;
			const cell = this.board[y][x];
			cell.currentState = CellState.Alive;
		});
	}

	tick() {
		this.getNextStates();
		this.transferStates();
	}

	transferStates() {
		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				this.board[y][x].currentState = this.nextStates[y][x];
			}
		}
	}

	getNextStates() {
		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				this.nextStates[y][x] = this.board[y][x].nextState();
			}
		}
	}

	toString() {
		let result = ' | ';
		for (let y = 0; y < this.size; y++) {
			if (y !== 0) result += `${os.EOL} | `;
			for (let x = 0; x < this.size; x++) {
				const cell = this.board[y][x];
				result += `${cell.toString()} | `;
			}
		}
		return result;
	}
}

module.exports = Generator;
