export enum ShipType {
  Carrier = 'c',
  Destroyer = 'd',
  Gunship = 'g',
}

export enum CellState {
  Empty = ' ',
  Ship = 's',
  Hit = 'x',
  Miss = 'o',
}

export interface Ship {
  type: ShipType.Carrier | ShipType.Destroyer | ShipType.Gunship;
  coordinates: Coordinate[];
}

export interface Coordinate {
  x: number;
  y: number;
}

export interface ShotResult {
  hit: boolean;
  message: string;
}
