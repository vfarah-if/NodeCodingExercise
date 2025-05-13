export enum ShipType {
  Carrier = 'c',
  Destroyer = 'd',
  Gunship = 'g',
}
export interface Ship {
  type: ShipType.Carrier | ShipType.Destroyer | ShipType.Gunship;
  coordinates: Coordinate[];
}

export interface Coordinate {
  x: number;
  y: number;
}
