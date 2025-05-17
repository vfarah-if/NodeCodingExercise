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
});
