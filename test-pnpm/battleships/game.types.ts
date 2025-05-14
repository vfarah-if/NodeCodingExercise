export enum ShipType {
  Carrier = 'c',
  Destroyer = 'd',
  Gunship = 'g',
}

export enum CellState {
  Empty = ' ',
  Hit = 'x',
  Miss = 'o',
}

export interface Ship {
  type: ShipType.Carrier | ShipType.Destroyer | ShipType.Gunship;
  coordinates: Coordinate[];
  hits: Set<string>;
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface ShotResult {
  hit: boolean;
  message: string;
  shipDestroyed?: boolean;
  gameWon?: boolean;
}

export interface GameState {
  ships: Ship[];
  board: string[][];
  winner: string | null;
}

export interface Game {
  players: string[];
  currentPlayerIndex: number;
  states: Map<string, GameState>;
}
