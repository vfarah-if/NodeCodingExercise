import { GameService } from './game.service';

export class CommandHandler {
  constructor(
    private readonly print: (line: string) => void,
    private readonly gameService: GameService,
  ) {}

  execute(input: string) {
    const [command, ...args] = input.split(/\s+/);

    switch (command) {
      case 'addPlayer': {
        const name = args.join(' ');
        this.gameService.addPlayer(name);
        this.print(`Player "${name}" added.`);
        break;
      }
      case 'start': {
        const playerName = args[0];
        if (!this.gameService.hasPlayer(playerName)) {
          throw new Error(`Unknown player: ${playerName}`);
        }

        const shipPart = args.slice(1).join(' ');
        const [type, ...coords] = shipPart.split(':');
        const coordinates = coords.map((coord) => {
          const [x, y] = coord.split(',').map(Number);
          return { x, y };
        });

        this.gameService.startGame(playerName, [
          {
            type: type as 'c' | 'd' | 'g',
            coordinates,
          },
        ]);
        break;
      }
      case 'print': {
        const playerName = args[0];
        if (!this.gameService.hasPlayer(playerName)) {
          throw new Error(`Unknown player: ${playerName}`);
        }
        this.print(this.gameService.printBoard(playerName));
        break;
      }
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }
}
