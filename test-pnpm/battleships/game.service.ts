import { DEFAULT_BOARD_SIZE, NO_HIT } from './constants';
import { Ship, Coordinate, CellState, ShotResult, GameState, Game, ShipType } from './game.types';
import { EOL } from 'os';

export interface IGameService {
  addPlayer(name: string): void;
  hasPlayer(name: string): boolean;
  startGame(playerName: string, ships: Ship[]): void;
  printBoard(playerName: string): string;
  getBoardSize(): number;
  fire(playerName: string, target: Coordinate): ShotResult;
  getWinner(playerName: string): string | null;
  getCurrentPlayer(): string | null;
  switchTurn(): string;
}

export class GameService implements IGameService {
  private readonly _players: Set<string>;
  private readonly _game: Game;
  private readonly _boardSize: number;

  constructor(boardSize: number = DEFAULT_BOARD_SIZE) {
    this.ensureBoardSizeGreaterThanZero(boardSize);
    this._boardSize = boardSize;
    this._players = new Set<string>();
    this._game = this.createNewGame();
  }

  getBoardSize(): number {
    return this._boardSize;
  }

  startGame(playerName: string, ships: Ship[]): void {
    this.ensurePlayerExists(playerName);
    const board = this.createEmptyBoard();

    const shipsWithNoHits = ships.map((ship) => ({
      ...ship,
      hits: new Set<string>(),
    }));

    this.placeAndValidateShipsOnBoard(shipsWithNoHits, board);

    const gameState = this._game.states.get(playerName) || {
      ships: shipsWithNoHits,
      board,
      winner: null,
    };
    this._game.states.set(playerName, gameState);

    if (!this._game.players.includes(playerName)) {
      this._game.players.push(playerName);
    }
  }

  fire(playerName: string, target: Coordinate): ShotResult {
    this.ensurePlayerExists(playerName);
    this.ensureWithinBoard(target);
    this.ensurePlayerTurn(playerName);
    const game = this.fetchGame(playerName);
    const currentState = game.board[target.y][target.x];
    this.ensureCellNotAlreadyUsed(currentState, target);
    const hit = currentState !== CellState.Empty;
    game.board[target.y][target.x] = hit ? CellState.Hit : CellState.Miss;
    return hit ? this.getShotResult(target, game, playerName) : NO_HIT;
  }

  getWinner(playerName: string): string | null {
    const gameState = this._game.states.get(playerName);
    return gameState?.winner ?? null;
  }

  getCurrentPlayer(): string | null {
    return this._game.players[this._game.currentPlayerIndex] || null;
  }

  switchTurn(): string {
    this.ensureMoreThanOnePlayerExists();
    this._game.currentPlayerIndex = (this._game.currentPlayerIndex + 1) % this._game.players.length;
    return this.getCurrentPlayer()!;
  }

  addPlayer(name: string): void {
    this._players.add(name);
  }

  hasPlayer(name: string): boolean {
    return this._players.has(name);
  }

  printBoard(playerName: string): string {
    const gameState = this._game.states.get(playerName);
    this.ensureGameState(gameState, playerName);
    const lines: string[] = [];
    this.addHeader(lines);
    this.addContent(gameState.board, lines);
    return lines.join(EOL);
  }

  private ensureGameState(gameState: GameState, playerName: string) {
    if (!gameState) {
      throw new Error(`No board found for player: ${playerName}`);
    }
  }

  private placeAndValidateShipsOnBoard(ships: Array<Ship>, board: string[][]) {
    for (const ship of ships) {
      for (const coord of ship.coordinates) {
        this.ensureWithinBoard(coord);
        this.ensureNoShipOverlap(board, coord);
        board[coord.y][coord.x] = ship.type;
      }
    }
  }

  private createNewGame(): Game {
    return {
      players: [],
      currentPlayerIndex: 0,
      states: new Map<string, GameState>(),
    } as Game;
  }

  private ensureBoardSizeGreaterThanZero(boardSize: number) {
    if (boardSize <= 1) {
      throw new Error('Board size must be at least 1');
    }
  }

  private ensureMoreThanOnePlayerExists() {
    if (this._game.players.length < 2) {
      throw new Error('Need at least 2 players to switch turns');
    }
  }

  private ensureCellNotAlreadyUsed(currentState: string, target: Coordinate): void {
    if (this.isCellAlreadyFired(currentState)) {
      throw new Error(`Already fired at (${target.x}, ${target.y})`);
    }
  }

  private getShotResult(target: Coordinate, game: GameState, playerName: string): ShotResult {
    const ship = this.findShipAtCoordinate(game.ships, target);
    ship.hits.add(`${target.x},${target.y}`);
    const shipDestroyed = this.isShipDestroyed(ship);
    const isWinner = this.checkForWin(game.ships);
    if (isWinner) {
      game.winner = playerName;
    }

    return {
      hit: true,
      message: shipDestroyed ? 'Ship destroyed!' : 'Hit!',
      shipDestroyed,
      gameWon: isWinner,
    };
  }

  private isCellAlreadyFired(currentState: string): boolean {
    return currentState === CellState.Hit || currentState === CellState.Miss;
  }

  private fetchGame(playerName: string): GameState {
    const gameState = this._game.states.get(playerName);
    this.ensureGameExists(gameState, playerName);
    return gameState;
  }

  private ensureGameExists(gameState: GameState, playerName: string): void {
    if (!gameState) {
      throw new Error(`No board found for player: ${playerName}`);
    }
  }

  private ensurePlayerTurn(playerName: string): void {
    const currentPlayer = this.getCurrentPlayer();
    if (currentPlayer !== playerName) {
      throw new Error(`Not your turn. Current player: ${currentPlayer}`);
    }
  }

  private ensureNoShipOverlap(board: string[][], coord: Coordinate): void {
    if (this.checkForShipOverlap(board, coord)) {
      throw new Error(`Ship overlap at (${coord.x}, ${coord.y})`);
    }
  }

  private ensureWithinBoard(coord: Coordinate): void {
    if (this.isOutsideBoard(coord)) {
      throw new Error(`Ship placement out of bounds: (${coord.x}, ${coord.y})`);
    }
  }

  private ensurePlayerExists(playerName: string): void {
    if (!this.hasPlayer(playerName)) {
      throw new Error(`Unknown player: ${playerName}`);
    }
  }

  private findShipAtCoordinate(ships: Ship[], target: Coordinate): Ship | undefined {
    return ships.find((ship) =>
      ship.coordinates.some((coord) => coord.x === target.x && coord.y === target.y),
    );
  }

  private isShipDestroyed(ship: Ship): boolean {
    return ship.coordinates.every((coord) => ship.hits.has(`${coord.x},${coord.y}`));
  }

  private checkForWin(ships: Ship[]): boolean {
    return ships.every((ship) => this.isShipDestroyed(ship));
  }

  private createEmptyBoard(): string[][] {
    return Array(this._boardSize)
      .fill(null)
      .map(() => Array(this._boardSize).fill(CellState.Empty));
  }

  private checkForShipOverlap(board: string[][], coord: Coordinate): boolean {
    return board[coord.y][coord.x] !== CellState.Empty;
  }

  private isOutsideBoard(coord: Coordinate): boolean {
    return coord.x < 0 || coord.x >= this._boardSize || coord.y < 0 || coord.y >= this._boardSize;
  }

  private addContent(board: string[][], lines: string[]): void {
    for (let y = 0; y < this._boardSize; y++) {
      let row = `  ${y}|`;
      for (let x = 0; x < this._boardSize; x++) {
        row += ` ${board[y][x]} |`;
      }
      lines.push(row);
    }
  }

  private addHeader(lines: string[]): void {
    let header = '   |';
    for (let x = 0; x < this._boardSize; x++) {
      header += ` ${x} |`;
    }
    lines.push(header);
  }
}
