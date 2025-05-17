import { MarsRover } from './mars.rover';

describe('mars rover should', () => {
  let marsRover: MarsRover;

  beforeEach(() => {
    marsRover = new MarsRover();
  });

  test.each([
    ['report its default start position', '', '0:0:N'],
    ['move in the same direction with a single move command', 'M', '0:1:N'],
    ['move forward and then turn facing south', 'MRRM', '0:0:S'],
    ['turn right facing east', 'R', '0:0:E'],
    ['turn right twice facing south', 'RR', '0:0:S'],
    ['turn right 4 times and face north again', 'RRRR', '0:0:N'],
    ['turn left facing west', 'L', '0:0:W'],
    ['move in the same direction with a double move command', 'MM', '0:2:N'],
    ['move forward facing east', 'RM', '1:0:E'],
    ['move forward facing west', 'RMLLM', '0:0:W'],
    ['wrap around north edge to bottom', 'MMMMMMMMMM', '0:0:N'],
    ['wrap around south edge to top', 'RRMMMMMMMMMM', '0:0:S'],
    ['wrap around east edge to the left', 'RMMMMMMMMMM', '0:0:E'],
    ['wrap around west edge to the right', 'LMMMMMMMMMM', '0:0:W'],
  ])('%s', (_, input, expected) => {
    const actual = marsRover.execute(input);

    expect(actual).toBe(expected);
  });
});
