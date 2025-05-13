import { GameService } from './game.service';

export class CommandHandler {
  constructor(
    private readonly print: (line: string) => void,
    private readonly gameService: GameService,
  ) {}

  execute(input: string) {
    const [command, ...args] = input.split(/\s+/);
    if (command === 'addPlayer') {
      const name = args.join(' ');
      this.gameService.addPlayer(name);
      this.print(`Player "${name}" added.`);
    }
  }
}
