export enum CompassDirection {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

export class Direction {
  private _directions: CompassDirection[];

  constructor(public readonly value: CompassDirection) {
    this._directions = new Array<CompassDirection>(
      CompassDirection.North,
      CompassDirection.East,
      CompassDirection.South,
      CompassDirection.West,
    );
  }

  rotateLeft(): Direction {
    const index = this._directions.indexOf(this.value);
    const newIndex = (index - 1 + this._directions.length) % this._directions.length;
    return new Direction(this._directions[newIndex]);
  }

  rotateRight(): Direction {
    const index = this._directions.indexOf(this.value);
    const newIndex = (index + 1 + this._directions.length) % this._directions.length;
    return new Direction(this._directions[newIndex]);
  }
}
