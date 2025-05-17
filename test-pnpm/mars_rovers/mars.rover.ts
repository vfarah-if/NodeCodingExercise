export class MarsRover {
  private _direction: 'N' | 'E' | 'S' | 'W' = 'N';
  private _x: number = 0;
  private _y: number = 0;

  execute(command: string): string {
    if (command === 'M') {
      return `${this._x}:${this._y + 1}:${this._direction}`;
    }
    if (command === 'R') {
      return `${this._x}:${this._y}:E`;
    }
    return `${this._x}:${this._y}:${this._direction}`;
  }
}
