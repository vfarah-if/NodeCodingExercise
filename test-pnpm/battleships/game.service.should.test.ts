import { GameService } from './game.service';
import { CellState, ShipType } from './game.types';

describe('GameService should', () => {
  let gameService: GameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  test('add a player', () => {
    gameService.addPlayer('Player1');
    expect(gameService.hasPlayer('Player1')).toBe(true);
  });

  test('use default board size of 10', () => {
    expect(gameService.getBoardSize()).toBe(10);
  });

  test('accept custom board size', () => {
    const customSizeGame = new GameService(15);
    expect(customSizeGame.getBoardSize()).toBe(15);
  });

  test('throw error for invalid board size', () => {
    expect(() => new GameService(0)).toThrow('Board size must be at least 1');
    expect(() => new GameService(-1)).toThrow('Board size must be at least 1');
  });

  test('throw error when placing ship out of bounds', () => {
    gameService.addPlayer('Player1');

    expect(() => {
      gameService.startGame('Player1', [
        {
          type: ShipType.Carrier,
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
          type: ShipType.Carrier,
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
          type: ShipType.Carrier,
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
          type: ShipType.Carrier,
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
          ],
        },
        {
          type: ShipType.Destroyer,
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
          type: ShipType.Carrier,
          coordinates: [
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
            { x: 8, y: 7 },
          ],
        },
        {
          type: ShipType.Destroyer,
          coordinates: [
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 3 },
          ],
        },
        {
          type: ShipType.Gunship,
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);
    }).not.toThrow();
  });

  test('print board with correct dimensions', () => {
    const customSizeGame = new GameService(5);
    customSizeGame.addPlayer('Player1');
    customSizeGame.startGame('Player1', [
      {
        type: ShipType.Gunship,
        coordinates: [{ x: 2, y: 2 }],
      },
    ]);

    const board = customSizeGame.printBoard('Player1');
    const lines = board.split('\n');
    expect(lines).toEqual([
      '   | 0 | 1 | 2 | 3 | 4 |',
      '  0|   |   |   |   |   |',
      '  1|   |   |   |   |   |',
      '  2|   |   | s |   |   |',
      '  3|   |   |   |   |   |',
      '  4|   |   |   |   |   |',
    ]);
  });

  describe('and firing should', () => {
    test('hit a ship', () => {
      const gameService = new GameService();
      gameService.addPlayer('Player1');
      gameService.startGame('Player1', [
        {
          type: ShipType.Gunship,
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);

      const result = gameService.fire('Player1', { x: 2, y: 2 });
      expect(result.hit).toBe(true);
      expect(result.message).toBe('Hit!');

      const board = gameService.printBoard('Player1');
      expect(board).toContain(CellState.Hit);
    });

    test('miss a ship', () => {
      const gameService = new GameService();
      gameService.addPlayer('Player1');
      gameService.startGame('Player1', [
        {
          type: ShipType.Gunship,
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);

      const result = gameService.fire('Player1', { x: 3, y: 3 });
      expect(result.hit).toBe(false);
      expect(result.message).toBe('Miss!');

      const board = gameService.printBoard('Player1');
      expect(board).toContain(CellState.Miss);
    });

    test('not allow firing at same spot twice', () => {
      const gameService = new GameService();
      gameService.addPlayer('Player1');
      gameService.startGame('Player1', [
        {
          type: ShipType.Gunship,
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);

      gameService.fire('Player1', { x: 2, y: 2 });
      const result = gameService.fire('Player1', { x: 2, y: 2 });
      expect(result.hit).toBe(false);
      expect(result.message).toBe('Already fired at (2, 2)');
    });

    test('throw error when firing out of bounds', () => {
      const gameService = new GameService();
      gameService.addPlayer('Player1');
      gameService.startGame('Player1', [
        {
          type: ShipType.Gunship,
          coordinates: [{ x: 2, y: 2 }],
        },
      ]);

      expect(() => gameService.fire('Player1', { x: 10, y: 10 })).toThrow(
        'Ship placement out of bounds: (10, 10)',
      );
    });
  });
});
