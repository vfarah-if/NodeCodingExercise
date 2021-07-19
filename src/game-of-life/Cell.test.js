import Cell from './Cell';
import { CellState } from './CellState';

describe('cell', () => {
  test('should create by default as a dead cell', () => {
    const cell = new Cell();

    expect(cell.currentState).toBe(CellState.Dead);
    expect(cell.currentState === CellState.Dead).toBeTruthy();
  });

  test('should come to life with three live neighbours by virtue of reproduction', () => {
    const cell = new Cell();
    cell.addNeighbours([
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
    ]);

    const actual = cell.nextState();

    expect(actual).toBe(CellState.Alive);
    expect(cell.isFertile()).toBeTruthy();
  });

  test('should kill a living cell when fewer than two live neighbours by virtue of underpopulation', () => {
    const cell = new Cell(CellState.Alive);
    cell.addNeighbours([
      new Cell(CellState.Dead),
      new Cell(CellState.Dead),
      new Cell(CellState.Dead),
    ]);

    const actual = cell.nextState();

    expect(actual).toBe(CellState.Dead);
    expect(cell.isUnderpopulated()).toBeTruthy();
  });

  test('should stay alive with two live neighbours by virtue of thriving', () => {
    const cell = new Cell(CellState.Alive);
    cell.addNeighbours([
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
      new Cell(CellState.Dead),
    ]);

    const actual = cell.nextState();

    expect(actual).toBe(CellState.Alive);
    expect(cell.isThriving()).toBeTruthy();
  });

  test('should kill the cell with more than three live neighbours by virtue of over population', () => {
    const cell = new Cell(CellState.Alive);
    cell.addNeighbours([
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
      new Cell(CellState.Alive),
    ]);

    const actual = cell.nextState();

    expect(actual).toBe(CellState.Dead);
    expect(cell.isOverpopulated()).toBeTruthy();
  });

  test('should output "X" to represent the alive cell', () => {
    const cell = new Cell(CellState.Alive);

    const actual = cell.toString();

    expect(actual).toBe('X');
  });

  test('should output " " to represent the dead cell', () => {
    const cell = new Cell(CellState.Dead);

    const actual = cell.toString();

    expect(actual).toBe(' ');
  });
});
