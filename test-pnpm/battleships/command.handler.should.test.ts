import { CommandHandler } from './command.handler';
import { GameService } from './game.service';
import { ShipType } from './game.types';

describe('CommandHandler should', () => {
  const gameService = {
    addPlayer: jest.fn(),
    hasPlayer: jest.fn().mockReturnValue(true),
    startGame: jest.fn(),
    printBoard: jest.fn().mockReturnValue('mock board output'),
    fire: jest.fn().mockReturnValue({ hit: true, message: 'Hit!' }),
  } as unknown as GameService;

  let handler: CommandHandler;
  const outputStrings = new Array<string>();

  beforeEach(() => {
    outputStrings.length = 0;
    jest.clearAllMocks();
    (gameService.hasPlayer as jest.Mock).mockReturnValue(true);
  });

  test('add a player when given the addPlayer command', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);

    handler.execute('addPlayer Player1');

    expect(outputStrings).toContain('Player "Player1" added.');
    expect(gameService.addPlayer).toHaveBeenCalledWith('Player1');
  });

  test.skip('delegate a valid start game command with one player and a carrier ship', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');

    handler.execute('start Player1 c:8,4:8,5:8,6:8,7');

    expect(gameService.hasPlayer).toHaveBeenCalledWith('Player1');
    expect(gameService.startGame).toHaveBeenCalledWith('Player1', [
      {
        type: ShipType.Carrier,
        coordinates: [
          { x: 8, y: 4 },
          { x: 8, y: 5 },
          { x: 8, y: 6 },
          { x: 8, y: 7 },
        ],
      },
    ]);
  });

  test.skip('delegate a valid start game command with one player and a destroyer ship', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');

    handler.execute('start Player1 d:2,3:3,3:4,3');

    expect(gameService.hasPlayer).toHaveBeenCalledWith('Player1');
    expect(gameService.startGame).toHaveBeenCalledWith('Player1', [
      {
        type: ShipType.Destroyer,
        coordinates: [
          { x: 2, y: 3 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
        ],
      },
    ]);
  });

  test.skip('delegate a valid start game command with one player and a gunship', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');

    handler.execute('start Player1 g:2,2');

    expect(gameService.hasPlayer).toHaveBeenCalledWith('Player1');
    expect(gameService.startGame).toHaveBeenCalledWith('Player1', [
      {
        type: ShipType.Gunship,
        coordinates: [{ x: 2, y: 2 }],
      },
    ]);
  });

  test('delegate a valid start game command with all ship types', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');

    handler.execute('start Player1 c:8,4:8,5:8,6:8,7 d:2,3:3,3:4,3 g:2,2');

    expect(gameService.hasPlayer).toHaveBeenCalledWith('Player1');
    expect(gameService.startGame).toHaveBeenCalledWith('Player1', [
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
  });

  test('print the board for a player', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);

    handler.execute('print Player1');

    expect(gameService.hasPlayer).toHaveBeenCalledWith('Player1');
    expect(gameService.printBoard).toHaveBeenCalledWith('Player1');
    expect(outputStrings).toContain('mock board output');
  });

  test('throw error for unknown player', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    (gameService.hasPlayer as jest.Mock).mockReturnValue(false);

    expect(() => handler.execute('print Player1')).toThrow('Unknown player: Player1');
  });

  test('throw error for unknown command', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);

    expect(() => handler.execute('unknown')).toThrow('Unknown command: unknown');
  });

  test('fire at coordinates', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');
    handler.execute('start Player1 g:2,2');

    handler.execute('fire Player1 2,2');

    expect(gameService.fire).toHaveBeenCalledWith('Player1', { x: 2, y: 2 });
    expect(outputStrings).toContain('Hit!');
  });

  test('throw error for invalid fire command format', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    handler.execute('addPlayer Player1');

    expect(() => handler.execute('fire Player1 invalid')).toThrow(
      'Invalid coordinates format: invalid',
    );
  });

  test('throw error for unknown player in fire command', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);
    (gameService.hasPlayer as jest.Mock).mockReturnValue(false);

    expect(() => handler.execute('fire Player1 2,2')).toThrow('Unknown player: Player1');
  });
});
