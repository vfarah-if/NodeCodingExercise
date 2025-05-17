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

  test('move forward and then turn facing south', () => {
    const actual = marsRover.execute('MRRM');

    expect(actual).toBe('0:0:S');
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

  test('turn left facing west', () => {
    const actual = marsRover.execute('L');

    expect(actual).toBe('0:0:W');
  });

  test('move in the same direction with a double move command', () => {
    const actual = marsRover.execute('MM');

    expect(actual).toBe('0:2:N');
  });

  test('move forward facing east', () => {
    const actual = marsRover.execute('RM');

    expect(actual).toBe('1:0:E');
  });
});
