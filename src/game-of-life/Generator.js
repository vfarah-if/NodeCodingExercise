const os = require('os');

const Cell = require('./cell');
const { CellState } = require('./CellState');

class Generator {
	constructor(size, positions = Array()) {
		this.size = size;
		this.board = Array.from(Array(size), () => new Array(size));
		this.initialiaseBoard();
		this.seed(positions);
	}

	initialiaseBoard() {
		for (let y = 0; y < this.size; y++) {
			for (let x = 0; x < this.size; x++) {
				this.board[y][x] = new Cell();
			}
		}
	}

	seed(positions) {
		positions.forEach((position) => {
			const { x, y } = position;
			const cell = this.board[y][x];
			cell.currentState = CellState.Alive;
		});
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
