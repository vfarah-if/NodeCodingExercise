const os = require('os');
const Generator = require('./Generator');

describe('Generator', () => {
	test('should generate an empty two by two board', () => {
		const generator = new Generator(2);

		expect(generator.toString()).toMatchSnapshot();
	});

	test('should generate a two by two board with seeded data in all rows and columns', () => {
		const generator = new Generator(2, [
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
		]);

		expect(generator.toString()).toMatchSnapshot();
	});

	test('should die from solitide with only one neighbour', () => {
		const generator = new Generator(2, [
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
		]);

		expect(generator.toString()).toMatchSnapshot('InitialSeed');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');
	});

	test('should survive with two or three neighbours', () => {
		const generator = new Generator(3, [
			{ x: 0, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 2 },
		]);

		expect(generator.toString()).toMatchSnapshot('InitialSeed');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');
	});

	test('should generate a four by four block still life', () => {
		const generator = new Generator(4, [
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
		]);

		expect(generator.toString()).toMatchSnapshot('InitialSeed');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');
	});

	test('should generate a three by three blinker oscilator', () => {
		const generator = new Generator(3, [
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
		]);

		expect(generator.toString()).toMatchSnapshot('InitialSeed');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');
	});

	test('should generate a six by six blinker oscilator', () => {
		const generator = new Generator(6, [
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
			{ x: 3, y: 3 },
			{ x: 4, y: 3 },
			{ x: 3, y: 4 },
			{ x: 4, y: 4 },
		]);

		expect(generator.toString()).toMatchSnapshot('InitialSeed');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');

		generator.tick();

		expect(generator.toString()).toMatchSnapshot('Tick');
	});
});
