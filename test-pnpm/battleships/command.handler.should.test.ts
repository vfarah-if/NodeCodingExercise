import { CommandHandler } from './command.handler';

describe('CommandHandler should', () => {
  test('add a player when given the addPlayer command', () => {
    const actual = new Array<string>();
    const handler = new CommandHandler((line) => actual.push(line));

    handler.execute('addPlayer Player1');

    expect(actual).toContain('Player "Player1" added.');
  });
});
