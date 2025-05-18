import { CompassDirection } from './direction';
import { Grid } from './grid';

export class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  move(direction: CompassDirection, grid: Grid): Position {
    const { x, y } = {
      [CompassDirection.North]: () => grid.wrap(this.x, this.y + 1),
      [CompassDirection.South]: () => grid.wrap(this.x, this.y - 1),
      [CompassDirection.East]: () => grid.wrap(this.x + 1, this.y),
      [CompassDirection.West]: () => grid.wrap(this.x - 1, this.y),
    }[direction]();
    return new Position(x, y);
  }

  toString(): string {
    return `${this.x}:${this.y}`;
  }
}
