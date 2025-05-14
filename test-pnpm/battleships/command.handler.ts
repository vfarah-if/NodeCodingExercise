import { GameService } from './game.service';
import { ShipType } from './game.types';

export class CommandHandler {
  constructor(
    private readonly print: (line: string) => void,
    private readonly gameService: GameService,
  ) {}

  execute(input: string) {
    const [command, ...args] = input.split(/\s+/);

    const commands: Record<string, (args: string[]) => void> = {
      addPlayer: (args) => this.addPlayerToGame(args),
      start: (args) => this.startGameForPlayer(args),
      print: (args) => this.printPlayerBoard(args),
      fire: (args) => this.processFireCommand(args),
    };

    const handler = commands[command];
    if (handler) {
      handler(args);
    } else {
      throwUnknownCommandError(command);
    }
  }

  private addPlayerToGame(args: string[]) {
    const name = args.join(' ');
    this.gameService.addPlayer(name);
    this.print(`Player "${name}" added.`);
  }

  private processFireCommand(args: string[]) {
    const { playerName, target } = this.parseForFireArguments(args);
    this.ensurePlayerExists(playerName);
    const result = this.gameService.fire(playerName, target);

    let message = result.message;
    if (result.shipDestroyed) {
      message += ' All ships destroyed!';
    }
    if (result.gameWon) {
      message += ' Game over!';
    }

    this.print(message);
  }

  private printPlayerBoard(args: string[]) {
    const playerName = args[0];
    this.ensurePlayerExists(playerName);
    this.print(this.gameService.printBoard(playerName));
  }

  private startGameForPlayer(args: string[]) {
    const { playerName, ships } = this.parseForStartArguments(args);
    this.gameService.startGame(playerName, ships);
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
        hits: new Set<string>(),
      };
    });
    return { playerName, ships };
  }

  private parseForFireArguments(args: string[]) {
    const playerName = args[0];
    const coordString = args[1];
    ensureValidCoordinatesFormat(coordString);
    const [x, y] = coordString.split(',').map(Number);
    this.ensureValidCoordinates(x, y, coordString);
    return {
      playerName,
      target: { x, y },
    };
  }

  private ensureValidCoordinates(x: number, y: number, coordString: string) {
    if (this.areCoordinatesInvalid(x, y)) {
      throw new Error(`Invalid coordinates format: ${coordString}`);
    }
  }

  private areCoordinatesInvalid(x: number, y: number) {
    return isNaN(x) || isNaN(y);
  }

  private ensurePlayerExists(playerName: string) {
    if (!this.gameService.hasPlayer(playerName)) {
      throw new Error(`Unknown player: ${playerName}`);
    }
  }
}

function ensureValidCoordinatesFormat(coordString: string) {
  if (isCoordinatesStringValid(coordString)) {
    throw new Error(`Invalid coordinates format: ${coordString}`);
  }
}

function isCoordinatesStringValid(coordString: string) {
  return !coordString || !coordString.includes(',');
}

function throwUnknownCommandError(command: string) {
  throw new Error(`Unknown command: ${command}`);
}
