export class CommandHandler {
  constructor(private readonly print: (line: string) => void) {}

  execute(input: string) {
    const [command, ...args] = input.split(/\s+/);
    if (command === 'addPlayer') {
      const name = args.join(' ');
      this.print(`Player "${name}" added.`);
    }
  }
}
