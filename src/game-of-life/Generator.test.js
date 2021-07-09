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
});
