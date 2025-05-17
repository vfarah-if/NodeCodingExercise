export class MarsRover {
  private _direction: 'N' | 'E' | 'S' | 'W' = 'N';
  private _x: number = 0;
  private _y: number = 0;

  execute(commands: string): string {
    for (const command of commands) {
      if (command === 'M') {
        this._y = this._y + 1;
      }
      if (command === 'R') {
        this._direction = 'E';
      }
    }
    return `${this._x}:${this._y}:${this._direction}`;
  }
}
