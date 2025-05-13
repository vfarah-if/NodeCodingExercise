import { CommandHandler } from './command.handler';
import { GameService } from './game.service';

describe('CommandHandler should', () => {
  test('add a player when given the addPlayer command', () => {
    const outputStrings = new Array<string>();
    const gameService: GameService = {
      addPlayer: jest.fn(),
    };
    const handler = new CommandHandler((line) => outputStrings.push(line), gameService);

    handler.execute('addPlayer Player1');

    expect(outputStrings).toContain('Player "Player1" added.');
    expect(gameService.addPlayer).toHaveBeenCalledWith('Player1');
  });
});
