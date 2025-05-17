import { CompassDirection, Direction } from './direction';
import { Position } from './position';

enum CommandType {
  Move = 'M',
  TurnRight = 'R',
  TurnLeft = 'L',
}

export class MarsRover {
  private _position = new Position(0, 0);
  private _direction = new Direction(CompassDirection.North);
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

    return `${this._position.toString()}:${this.currentDirection()}`;
  }

  private currentDirection(): CompassDirection {
    return this._direction.value;
  }

  private moveLeft(): void {
    this._direction = this._direction.rotateLeft();
  }

  private moveRight(): void {
    this._direction = this._direction.rotateRight();
  }

  private moveForward(): void {
    const positionMap: Record<CompassDirection, () => Position> = {
      [CompassDirection.North]: () => this._position.moveNorth(this._gridSize),
      [CompassDirection.South]: () => this._position.moveSouth(this._gridSize),
      [CompassDirection.East]: () => this._position.moveEast(this._gridSize),
      [CompassDirection.West]: () => this._position.moveWest(this._gridSize),
    };
    this._position = positionMap[this.currentDirection()]();
  }
}
