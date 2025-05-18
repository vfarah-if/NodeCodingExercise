import { Position } from './position';

export type Cordinate = {
  x: number;
  y: number;
};

export class Grid {
  constructor(
    private readonly _obstacles: Array<Position> | null = null,
    public readonly size: number = 10,
  ) {}

  hasObstacle(x: number, y: number): boolean {
    return this._obstacles?.some((obstacle) => obstacle.x === x && obstacle.y === y);
  }

  wrap(x: number, y: number): Cordinate {
    return {
      x: (x + this.size) % this.size,
      y: (y + this.size) % this.size,
    };
  }
}
