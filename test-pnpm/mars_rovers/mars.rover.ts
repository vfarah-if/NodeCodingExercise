import { Position } from './position';

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
  TurnLeft = 'L',
}

export class MarsRover {
  private _position = new Position(0, 0);
  private _directions: Direction[] = new Array<Direction>(
    CompassDirection.North,
    CompassDirection.East,
    CompassDirection.South,
    CompassDirection.West,
  );
  private _directionIndex = 0;
  private _gridSize = 10;

  execute(commands: string): string {
    for (const command of commands) {
      switch (command) {
        case CommandType.Move:
          this.moveForward();
          break;
        case CommandType.TurnRight:
          this.moveRight();
          break;
        case CommandType.TurnLeft:
          this.moveLeft();
          break;
      }
    }

    return `${this._position.x}:${this._position.y}:${this.currentDirection()}`;
  }

  private currentDirection(): Direction {
    return this._directions[this._directionIndex];
  }

  private moveLeft(): void {
    // subtract 1 but wrap around if < 0
    this._directionIndex =
      (this._directionIndex - 1 + this._directions.length) % this._directions.length;
  }

  private moveRight(): void {
    this._directionIndex = (this._directionIndex + 1) % this._directions.length;
  }

  private moveForward(): void {
    switch (this.currentDirection()) {
      case CompassDirection.North: {
        this._position = this._position.moveNorth(this._gridSize);
        break;
      }
      case CompassDirection.South: {
        this._position = this._position.moveSouth(this._gridSize);
        break;
      }
      case CompassDirection.East: {
        this._position = this._position.moveEast(this._gridSize);
        break;
      }
      case CompassDirection.West: {
        this._position.x = (this._position.x - 1) % this._gridSize;
        break;
      }
    }
  }
}
