import { MarsRover } from './mars.rover';

describe('mars rover should', () => {
  let marsRover: MarsRover;

  beforeEach(() => {
    marsRover = new MarsRover();
  });

  test('report its default start position', () => {
    const actual = marsRover.execute('');

    expect(actual).toBe('0:0:N');
  });

  test('move in the same direction with a single move command', () => {
    const actual = marsRover.execute('M');

    expect(actual).toBe('0:1:N');
  });

  test('turn right facing east', () => {
    const actual = marsRover.execute('R');

    expect(actual).toBe('0:0:E');
  });

  test('turn right twice facing south', () => {
    const actual = marsRover.execute('RR');

    expect(actual).toBe('0:0:S');
  });

  test('turn right 4 times and face north again', () => {
    const actual = marsRover.execute('RRRR');

    expect(actual).toBe('0:0:N');
  });

  test('move in the same direction with a double move command', () => {
    const actual = marsRover.execute('MM');

    expect(actual).toBe('0:2:N');
  });
});
