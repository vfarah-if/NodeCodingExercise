const GameOfLife = require('./GameOfLife');

describe('GameOfLife', () => {
	test('should generate an empty two by two board', () => {
		const gameOfLife = new GameOfLife(2);

		expect(gameOfLife.toString()).toMatchSnapshot();
	});

	test('should generate a two by two board with seeded data in all rows and columns', () => {
		const gameOfLife = new GameOfLife(2, [
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot();
	});

	test('should die from solitide with only one neighbour', () => {
		const gameOfLife = new GameOfLife(2, [
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot('InitialSeed');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');
	});

	test('should survive with two or three neighbours', () => {
		const gameOfLife = new GameOfLife(3, [
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 2 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot('InitialSeed');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');
	});

	test('should generate a four by four block still life', () => {
		const gameOfLife = new GameOfLife(4, [
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot('InitialSeed');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');
	});

	test('should generate a three by three blinker oscilator', () => {
		const gameOfLife = new GameOfLife(3, [
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot('InitialSeed');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');
	});

	test('should generate a six by six blinker oscilator', () => {
		const gameOfLife = new GameOfLife(6, [
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		]);

		expect(gameOfLife.toString()).toMatchSnapshot('InitialSeed');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');

		gameOfLife.generate();

		expect(gameOfLife.toString()).toMatchSnapshot('Generate');
	});
});
