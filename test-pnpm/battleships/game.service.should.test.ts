import { GameService } from './game.service';

describe('GameService should', () => {
  let gameService: GameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  test('add a player', () => {
    gameService.addPlayer('Player1');
    expect(gameService.hasPlayer('Player1')).toBe(true);
  });

  test('throw error when placing ship out of bounds', () => {
    gameService.addPlayer('Player1');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: 'c',
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 10 }, // Out of bounds
          ],
        },
      ]);
    }).toThrow('Ship placement out of bounds: (8, 10)');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: 'c',
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 10, y: 7 }, // Out of bounds
          ],
        },
      ]);
    }).toThrow('Ship placement out of bounds: (10, 7)');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: 'c',
          coordinates: [
            { x: -1, y: 4 }, // Out of bounds
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
          ],
        },
      ]);
    }).toThrow('Ship placement out of bounds: (-1, 4)');
  });

  test('throw error when ships overlap', () => {
    gameService.addPlayer('Player1');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: 'c',
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
          ],
        },
        {
          type: 'd',
          coordinates: [
            { x: 8, y: 6 }, // Overlaps with carrier
            { x: 8, y: 7 },
            { x: 8, y: 8 },
          ],
        },
      ]);
    }).toThrow('Ship overlap at (8, 6)');
  });

  test('allow valid ship placement', () => {
    gameService.addPlayer('Player1');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: 'c',
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
          ],
        },
        {
          type: 'd',
          coordinates: [
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 3 },
          ],
        },
        {
          type: 'g',
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);
    }).not.toThrow();
  });
});
