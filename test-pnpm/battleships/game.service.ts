import { DEFAULT_BOARD_SIZE } from './constants';
import { Ship, Coordinate, CellState, ShotResult } from './game.types';
import { EOL } from 'os';

export interface IGameService {
  addPlayer(name: string): void;
  hasPlayer(name: string): boolean;
  startGame(playerName: string, ships: Ship[]): void;
  printBoard(playerName: string): string;
  getBoardSize(): number;
  fire(playerName: string, target: Coordinate): ShotResult;
}

export class GameService implements IGameService {
  private readonly _players: Set<string>;
  private readonly _boards: Map<string, string[][]>;
  private readonly _boardSize: number;

  constructor(boardSize: number = DEFAULT_BOARD_SIZE) {
    if (boardSize <= 1) {
      throw new Error('Board size must be at least 1');
    }
    this._boardSize = boardSize;
    this._players = new Set<string>();
    this._boards = new Map<string, string[][]>();
  }

  getBoardSize(): number {
    return this._boardSize;
  }

  startGame(playerName: string, ships: Ship[]): void {
    this.ensurePlayerExists(playerName);
    const board = this.createEmptyBoard();
    for (const ship of ships) {
      for (const coord of ship.coordinates) {
        this.ensureWithinBoard(coord);
        this.ensureNoShipOverlap(board, coord);
        board[coord.y][coord.x] = CellState.Ship;
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

    const lines: string[] = [];
    this.printHeader(lines);
    this.printContent(board, lines);
    return lines.join(EOL);
  }

  fire(playerName: string, target: Coordinate): ShotResult {
    this.ensurePlayerExists(playerName);
    this.ensureWithinBoard(target);

    const board = this._boards.get(playerName);
    if (!board) {
      throw new Error(`No board found for player: ${playerName}`);
    }

    const currentState = board[target.y][target.x];
    if (currentState === CellState.Hit || currentState === CellState.Miss) {
      return {
        hit: false,
        message: `Already fired at (${target.x}, ${target.y})`,
      };
    }

    const hit = currentState === CellState.Ship;
    board[target.y][target.x] = hit ? CellState.Hit : CellState.Miss;

    return {
      hit,
      message: hit ? 'Hit!' : 'Miss!',
    };
  }

  private ensureNoShipOverlap(board: string[][], coord: Coordinate) {
    if (this.checkForShipOverlap(board, coord)) {
      throw new Error(`Ship overlap at (${coord.x}, ${coord.y})`);
    }
  }

  private ensureWithinBoard(coord: Coordinate) {
    if (this.outsideBoard(coord)) {
      throw new Error(`Ship placement out of bounds: (${coord.x}, ${coord.y})`);
    }
  }

  private ensurePlayerExists(playerName: string) {
    if (!this.hasPlayer(playerName)) {
      throw new Error(`Unknown player: ${playerName}`);
    }
  }

  private checkForShipOverlap(board: string[][], coord: Coordinate): boolean {
    return board[coord.y][coord.x] !== CellState.Empty;
  }

  private createEmptyBoard(): string[][] {
    return Array(this._boardSize)
      .fill(null)
      .map(() => Array(this._boardSize).fill(CellState.Empty));
  }

  private outsideBoard(coord: Coordinate) {
    return coord.x < 0 || coord.x >= this._boardSize || coord.y < 0 || coord.y >= this._boardSize;
  }

  private printContent(board: string[][], lines: string[]) {
    for (let y = 0; y < this._boardSize; y++) {
      let row = `  ${y}|`;
      for (let x = 0; x < this._boardSize; x++) {
        row += ` ${board[y][x]} |`;
      }
      lines.push(row);
    }
  }

  private printHeader(lines: string[]) {
    let header = '   |';
    for (let x = 0; x < this._boardSize; x++) {
      header += ` ${x} |`;
    }
    lines.push(header);
  }
}
