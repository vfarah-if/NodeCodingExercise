import { GameService } from './game.service';

describe('GameService should', () => {
  let gameService: GameService;
  beforeEach(() => {
    gameService = new GameService();
  });

  test('add a player by name', () => {
    gameService.addPlayer('Player1');

    expect(gameService.hasPlayer('Player1')).toBeTruthy();
  });
});
