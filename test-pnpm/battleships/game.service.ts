export interface IGameService {
  addPlayer(name: string): void;
  hasPlayer(name: string): boolean;
}

export class GameService implements IGameService {
  private readonly _players: Set<string>;

  constructor() {
    this._players = new Set<string>();
  }

  addPlayer(name: string): void {
    this._players.add(name);
  }

  hasPlayer(name: string): boolean {
    return this._players.has(name);
  }
}
