import { CompassDirection } from './direction';

export class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  move(direction: CompassDirection, gridSize: number): Position {
    switch (direction) {
      case CompassDirection.North:
        return this.moveNorth(gridSize);
      case CompassDirection.South:
        return this.moveSouth(gridSize);
      case CompassDirection.East:
        return this.moveEast(gridSize);
      case CompassDirection.West:
        return this.moveWest(gridSize);
    }
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
