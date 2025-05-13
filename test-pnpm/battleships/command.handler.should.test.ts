import { CommandHandler } from './command.handler';
import { GameService } from './game.service';

describe('CommandHandler should', () => {
  const gameService = {
    addPlayer: jest.fn(),
    hasPlayer: jest.fn(),
  } as unknown as GameService;
  let handler: CommandHandler;
  const outputStrings = new Array<string>();

  test('add a player when given the addPlayer command', () => {
    handler = new CommandHandler((line) => outputStrings.push(line), gameService);

    handler.execute('addPlayer Player1');

    expect(outputStrings).toContain('Player "Player1" added.');
    expect(gameService.addPlayer).toHaveBeenCalledWith('Player1');
  });
});
