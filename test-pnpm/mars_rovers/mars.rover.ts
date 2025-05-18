import { CompassDirection, Direction } from './direction';
import { Grid } from './grid';
import { Position } from './position';

enum CommandType {
  Move = 'M',
  TurnRight = 'R',
  TurnLeft = 'L',
}

export class MarsRover {
  private _position: Position;
  private _direction: Direction;
  private readonly commandHandlers: Record<CommandType, () => void>;

  constructor(private readonly _grid: Grid) {
    this._position = new Position(0, 0);
    this._direction = new Direction(CompassDirection.North);
    this.commandHandlers = {
      [CommandType.Move]: () => this.moveForward(),
      [CommandType.TurnRight]: () => this.moveRight(),
      [CommandType.TurnLeft]: () => this.moveLeft(),
    };
  }

  execute(commands: string): string {
    for (const command of commands) {
      this.commandHandlers[command]();
    }
C    const next = this._position.move(this.currentDirection(), this._grid);
    const prefix = this._grid.hasObstacle(next.x, next.y) ? 'O:' : '';
    return `${prefix}${this._position.toString()}:${this._direction.value}`;
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
    const next = this._position.move(this.currentDirection(), this._grid);
    if (!this._grid.hasObstacle(next.x, next.y)) {
      this._position = next;
    }
  }
}
