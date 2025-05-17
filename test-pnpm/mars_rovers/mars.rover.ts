type Direction =
  | DirectionType.North
  | DirectionType.East
  | DirectionType.South
  | DirectionType.West;

enum DirectionType {
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
    DirectionType.North,
    DirectionType.East,
    DirectionType.South,
    DirectionType.West,
  );
  private _directionIndex = 0;
  private _x: number = 0;
  private _y: number = 0;

  execute(commands: string): string {
    for (const command of commands) {
      if (command === CommandType.Move) {
        this._y = this._y + 1;
      }
      if (command === CommandType.TurnRight) {
        this._directionIndex = this._directionIndex + 1;
      }
    }
    return `${this._x}:${this._y}:${this._directions[this._directionIndex]}`;
  }
}
