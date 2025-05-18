import { CompassDirection } from './direction';

export class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly obstacles: Array<Position> = null,
  ) {}

  move(direction: CompassDirection, gridSize: number): Position {
    return {
      [CompassDirection.North]: () => this.moveNorth(gridSize),
      [CompassDirection.East]: () => this.moveEast(gridSize),
      [CompassDirection.South]: () => this.moveSouth(gridSize),
      [CompassDirection.West]: () => this.moveWest(gridSize),
    }[direction]();
  }

  hasObstacle(): boolean {
    return this.obstacles?.some((obstacle) => obstacle.x === this.x && obstacle.y === this.y);
  }

  private moveNorth(gridSize: number): Position {
    return new Position(this.x, (this.y + 1) % gridSize, this.obstacles);
  }

  private moveSouth(gridSize: number): Position {
    return new Position(this.x, (this.y - 1) % gridSize, this.obstacles);
  }

  private moveEast(gridSize: number): Position {
    return new Position((this.x + 1) % gridSize, this.y, this.obstacles);
  }

  private moveWest(gridSize: number): Position {
    return new Position((this.x - 1 + gridSize) % gridSize, this.y, this.obstacles);
  }

  toString(currentDirection: CompassDirection, gridSize: number): string {
    const nextMove = this.move(currentDirection, gridSize);
    const OBSTACLE_PREFIX = 'O:';
    const NO_PREFIX = '';
    return `${nextMove.hasObstacle() ? OBSTACLE_PREFIX : NO_PREFIX}${this.x}:${this.y}:${currentDirection}`;
  }
}
