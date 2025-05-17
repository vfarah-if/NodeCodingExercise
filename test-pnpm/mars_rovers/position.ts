export class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  moveNorth(gridSize: number): Position {
    return new Position(this.x, (this.y + 1) % gridSize);
  }

  moveSouth(gridSize: number): Position {
    return new Position(this.x, (this.y - 1) % gridSize);
  }

  moveEast(gridSize: number): Position {
    return new Position((this.x + 1) % gridSize, this.y);
  }

  moveWest(gridSize: number): Position {
    return new Position((this.x - 1) % gridSize, this.y);
  }

  toString(): string {
    return `${this.x}:${this.y}`;
  }
}
