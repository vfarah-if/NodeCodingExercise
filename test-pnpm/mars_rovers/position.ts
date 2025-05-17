export class Position {
  constructor(
    public x: number,
    public y: number,
  ) {}

  moveNorth(gridSize: number): Position {
    return new Position(this.x, (this.y + 1) % gridSize);
  }
}
