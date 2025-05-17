import { EOL } from 'os';
import { CommandHandler } from './command.handler';
import { GameService } from './game.service';
import { ShipType } from './game.types';

describe('CommandHandler should', () => {
  let gameService: GameService;
  let print: jest.Mock;
  let handler: CommandHandler;

  beforeEach(() => {
    gameService = new GameService();
    print = jest.fn();
    handler = new CommandHandler(print, gameService);
  });

  test('delegate valid add player command', () => {
    addPlayerOne(handler);
    expect(gameService.hasPlayer('Player1')).toBe(true);
    expect(print).toHaveBeenLastCalledWith('Player "Player1" added.');
  });

  test('delegate valid start game command with all ship types', () => {
    addPlayerOne(handler);
    handler.execute('start Player1 c:2,2:2,3:2,4:2,5:2,6 d:3,2:3,3:3,4 g:4,2');
    const board = gameService.printBoard('Player1');
    expect(board).toContain(ShipType.Carrier);
    expect(board).toContain(ShipType.Destroyer);
    expect(board).toContain(ShipType.Gunship);
    expect(board.split(EOL)).toEqual([
      '   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |',
      '  0|   |   |   |   |   |   |   |   |   |   |',
      '  1|   |   |   |   |   |   |   |   |   |   |',
      '  2|   |   | c | d | g |   |   |   |   |   |',
      '  3|   |   | c | d |   |   |   |   |   |   |',
      '  4|   |   | c | d |   |   |   |   |   |   |',
      '  5|   |   | c |   |   |   |   |   |   |   |',
      '  6|   |   | c |   |   |   |   |   |   |   |',
      '  7|   |   |   |   |   |   |   |   |   |   |',
      '  8|   |   |   |   |   |   |   |   |   |   |',
      '  9|   |   |   |   |   |   |   |   |   |   |',
    ]);
  });

  test('throw error for unknown command', () => {
    expect(() => handler.execute('unknown')).toThrow('Unknown command: unknown');
  });

  test('throw error for unknown player', () => {
    expect(() => handler.execute('fire Player1 2,2')).toThrow('Unknown player: Player1');
  });

  describe('turn command', () => {
    beforeEach(() => {
      print.mockClear();
    });

    test('switch turns between players', () => {
      addPlayersAndStartAGame(handler);

      // First player's turn
      handler.execute('fire Player1 2,2');
      expect(print).toHaveBeenLastCalledWith('Hit!');

      // Switch turns
      handler.execute('endTurn');
      expect(print).toHaveBeenLastCalledWith('Turn switched to Player2');

      // Second player's turn
      handler.execute('fire Player2 3,2');
      expect(print).toHaveBeenLastCalledWith('Hit!');

      // Switch back to first player
      handler.execute('endTurn');
      expect(print).toHaveBeenLastCalledWith('Turn switched to Player1');
    });

    test('prevent firing out of turn', () => {
      addPlayersAndStartAGame(handler);

      expect(() => handler.execute('fire Player2 2,2')).toThrow(
        'Not your turn. Current player: Player1',
      );
    });

    test('prevent switching turns with insufficient players', () => {
      addPlayerOne(handler);
      handler.execute('start Player1 c:2,2:2,3:2,4:2,5:2,6');

      expect(() => handler.execute('endTurn')).toThrow('Need at least 2 players to switch turns');
    });
  });
});

function addPlayersAndStartAGame(handler: CommandHandler) {
  addTwoPlayers(handler);
  handler.execute('start Player1 c:2,2:2,3:2,4:2,5:2,6');
  handler.execute('start Player2 c:3,2:3,3:3,4:3,5:3,6');
}

function addTwoPlayers(handler: CommandHandler) {
  addPlayerOne(handler);
  addPlayerTwo(handler);
}

function addPlayerTwo(handler: CommandHandler) {
  handler.execute('addPlayer Player2');
}

function addPlayerOne(handler: CommandHandler) {
  handler.execute('addPlayer Player1');
}
