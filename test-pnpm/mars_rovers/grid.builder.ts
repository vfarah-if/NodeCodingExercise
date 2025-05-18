import { Grid } from './grid';
import { Position } from './position';

export class GridBuilder {
  private _size: number = 10;
  private _obstacles: Array<Position>;

  withSize(size: number): this {
    this._size = size;
    return this;
  }

  withObstacles(...obstacles: Position[]): this {
    this._obstacles = obstacles;
    return this;
  }

  buid(): Grid {
    return new Grid(this._obstacles, this._size);
  }
}
