import { Grid } from './grid';
import { MarsRover } from './mars.rover';
import { Position } from './position';

describe('mars rover should', () => {
  let grid: Grid;
  let marsRover: MarsRover;

  beforeEach(() => {
    grid = new Grid();
    marsRover = new MarsRover(grid);
  });

  test.each([
    ['report its default start position', '', '0:0:N'],

    ['move in the same direction with a single move command', 'M', '0:1:N'],
    ['move forward and then turn facing south', 'MRRM', '0:0:S'],
    ['move in the same direction with a double move command', 'MM', '0:2:N'],
    ['move forward facing east', 'RM', '1:0:E'],
    ['move forward facing west', 'RMLLM', '0:0:W'],

    ['turn right facing east', 'R', '0:0:E'],
    ['turn right twice facing south', 'RR', '0:0:S'],
    ['turn right 4 times and face north again', 'RRRR', '0:0:N'],
    ['turn left facing west', 'L', '0:0:W'],

    ['wrap around north edge to bottom', 'MMMMMMMMMM', '0:0:N'],
    ['wrap around south edge to top', 'RRMMMMMMMMMM', '0:0:S'],
    ['wrap around east edge to the left', 'RMMMMMMMMMM', '0:0:E'],
    ['wrap around west edge to the right', 'LMMMMMMMMMM', '0:0:W'],

    ['given a grid with no obstacles', 'MMRMMLM', '2:3:N'],
    ['given a grid with no obstacles', 'MMMMMMMMMM', '0:0:N'],
  ])('%s with input %s outputs %s', (_, input, expected) => {
    const actual = marsRover.execute(input);

    expect(actual).toBe(expected);
  });

  describe('when given obstacles should', () => {
    test('navigate up to the obstacle and no further', () => {
      var obstacle = new Position(0, 3);
      grid = new Grid([obstacle]);
      marsRover = new MarsRover(grid);

      var actual = marsRover.execute('MMMM');

      expect(actual).toBe('O:0:2:N');
    });
  });
});
