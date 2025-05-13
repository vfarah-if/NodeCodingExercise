import { GameService } from './game.service';
import { ShipType } from './game.types';

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
        const { playerName, ships } = this.parseForStartArguments(args);
        this.gameService.startGame(playerName, ships);
        break;
      }
      case 'print': {
        const playerName = args[0];
        this.ensurePlayerExists(playerName);
        this.print(this.gameService.printBoard(playerName));
        break;
      }
      default:
        throwUnknownCommandError(command);
    }
  }

  private parseForStartArguments(args: string[]) {
    const playerName = args[0];
    this.ensurePlayerExists(playerName);

    const ships = args.slice(1).map((shipPart) => {
      const [type, ...coords] = shipPart.split(':');
      const coordinates = coords.map((coord) => {
        const [x, y] = coord.split(',').map(Number);
        return { x, y };
      });
      return {
        type: type as ShipType.Carrier | ShipType.Destroyer | ShipType.Gunship,
        coordinates,
      };
    });
    return { playerName, ships };
  }

  private ensurePlayerExists(playerName: string) {
    if (!this.gameService.hasPlayer(playerName)) {
      throw new Error(`Unknown player: ${playerName}`);
    }
  }
}

function throwUnknownCommandError(command: string) {
  throw new Error(`Unknown command: ${command}`);
}
