import { MarsRover } from './mars.rover';

describe('mars rover should', () => {
  test('report its default start position', () => {
    let marsRover = new MarsRover();

    const actual = marsRover.execute('');

    expect(actual).toBe('0:0:N');
  });

  test('move in the same direction with single move command', () => {
    let marsRover = new MarsRover();

    const actual = marsRover.execute('M');

    expect(actual).toBe('0:1:N');
  });
});
