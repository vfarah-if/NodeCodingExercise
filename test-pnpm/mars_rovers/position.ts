import { CompassDirection } from './direction';

export class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  move(direction: CompassDirection, gridSize: number): Position {
    return {
      [CompassDirection.North]: () => this.moveNorth(gridSize),
      [CompassDirection.East]: () => this.moveEast(gridSize),
      [CompassDirection.South]: () => this.moveSouth(gridSize),
      [CompassDirection.West]: () => this.moveWest(gridSize),
    }[direction]();
  }

  private moveNorth(gridSize: number): Position {
    return new Position(this.x, (this.y + 1) % gridSize);
  }

  private moveSouth(gridSize: number): Position {
    return new Position(this.x, (this.y - 1) % gridSize);
  }

  private moveEast(gridSize: number): Position {
    return new Position((this.x + 1) % gridSize, this.y);
  }

  private moveWest(gridSize: number): Position {
    return new Position((this.x - 1) % gridSize, this.y);
  }

  toString(): string {
    return `${this.x}:${this.y}`;
  }
}
