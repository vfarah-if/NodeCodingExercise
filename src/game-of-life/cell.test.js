const Cell = require('./Cell');
const { CellState } = require('./CellState');

describe('cell', () => {
	test('should create by default as a dead cell', () => {
		const cell = new Cell();

		expect(cell.currentState).toBe(CellState.Dead);
		expect(cell.currentState === CellState.Dead).toBeTruthy();
	});

	test('should come to life with three live neighbours by virtue of reproduction', () => {
		const cell = new Cell();
		cell.addNeighbours(
			new Array(
				new Cell(CellState.Alive),
				new Cell(CellState.Alive),
				new Cell(CellState.Alive)
			)
		);

		const actual = cell.nextState();

		expect(actual).toBe(CellState.Alive);
	});

	test('should kill an living cell when fewer than two live neighbours cause underspopulation', () => {
		const cell = new Cell(CellState.Alive);
		cell.addNeighbours(
			new Array(
				new Cell(CellState.Dead),
				new Cell(CellState.Dead),
				new Cell(CellState.Dead)
			)
		);

		const actual = cell.nextState();

		expect(actual).toBe(CellState.Dead);
	});
});
