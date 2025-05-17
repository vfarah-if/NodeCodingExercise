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
  private readonly commandHandlers: Record<CommandType, () => void> = {
    [CommandType.Move]: () => this.moveForward(),
    [CommandType.TurnRight]: () => this.moveRight(),
    [CommandType.TurnLeft]: () => this.moveLeft(),
  };

  execute(commands: string): string {
    for (const command of commands) {
      this.commandHandlers[command]();
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
    this._position = this._position.move(this.currentDirection(), this._gridSize);
  }
}
