export enum ShipType {
  Carrier = 'c',
  Destroyer = 'd',
  Gunship = 'g',
}
export interface Ship {
  type: 'c' | 'd' | 'g';
  coordinates: Coordinate[];
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface IGameService {
  addPlayer(name: string): void;
  hasPlayer(name: string): boolean;
  startGame(playerName: string, ships: Ship[]): void;
  printBoard(playerName: string): string;
}

export class GameService implements IGameService {
  private readonly _players: Set<string>;
  private readonly _boards: Map<string, string[][]>;
  private readonly BOARD_SIZE = 10;

  constructor() {
    this._players = new Set<string>();
    this._boards = new Map<string, string[][]>();
  }

  startGame(playerName: string, ships: Ship[]): void {
    if (!this.hasPlayer(playerName)) {
      throw new Error(`Unknown player: ${playerName}`);
    }

    // Initialize empty board
    const board = Array(this.BOARD_SIZE)
      .fill(null)
      .map(() => Array(this.BOARD_SIZE).fill(' '));

    for (const ship of ships) {
      for (const coord of ship.coordinates) {
        if (
          coord.x < 0 ||
          coord.x >= this.BOARD_SIZE ||
          coord.y < 0 ||
          coord.y >= this.BOARD_SIZE
        ) {
          throw new Error(`Ship placement out of bounds: (${coord.x}, ${coord.y})`);
        }
        // Check overlap
        if (board[coord.y][coord.x] !== ' ') {
          throw new Error(`Ship overlap at (${coord.x}, ${coord.y})`);
        }
        board[coord.y][coord.x] = ship.type;
      }
    }

    this._boards.set(playerName, board);
  }

  addPlayer(name: string): void {
    this._players.add(name);
  }

  hasPlayer(name: string): boolean {
    return this._players.has(name);
  }

  printBoard(playerName: string): string {
    const board = this._boards.get(playerName);
    if (!board) {
      throw new Error(`No board found for player: ${playerName}`);
    }

    let output = '    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |\n';

    for (let y = 0; y < this.BOARD_SIZE; y++) {
      output += `  ${y}|`;
      for (let x = 0; x < this.BOARD_SIZE; x++) {
        output += ` ${board[y][x]} |`;
      }
      output += '\n';
    }

    return output;
  }
}
