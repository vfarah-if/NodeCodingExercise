type Direction =
  | CompassDirection.North
  | CompassDirection.East
  | CompassDirection.South
  | CompassDirection.West;

enum CompassDirection {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

enum CommandType {
  Move = 'M',
  TurnRight = 'R',
}

export class MarsRover {
  private _directions: Direction[] = new Array<Direction>(
    CompassDirection.North,
    CompassDirection.East,
    CompassDirection.South,
    CompassDirection.West,
  );
  private _directionIndex = 0;
  private _x: number = 0;
  private _y: number = 0;

  execute(commands: string): string {
    for (const command of commands) {
      if (command === CommandType.Move) {
        this.moveForward();
      }

      if (command === CommandType.TurnRight) {
        this.moveRight();
      }
    }

    return `${this._x}:${this._y}:${this._directions[this._directionIndex]}`;
  }

  private moveRight() {
    this._directionIndex = (this._directionIndex + 1) % this._directions.length;
  }

  private moveForward() {
    this._y = this._y + 1;
  }
}
