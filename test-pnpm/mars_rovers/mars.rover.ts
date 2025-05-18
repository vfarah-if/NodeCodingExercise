import { CompassDirection, Direction } from './direction';
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

  constructor(
    obstacles: Array<Position> | null = null,
    private readonly _gridSize = 10,
  ) {
    this._position = new Position(0, 0, obstacles);
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

    return `${this._position.toString(this.currentDirection(), this._gridSize)}`;
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
    const nextPosition = this._position.move(this.currentDirection(), this._gridSize);
    if (!nextPosition.hasObstacle()) {
      this._position = nextPosition;
    }
  }
}
