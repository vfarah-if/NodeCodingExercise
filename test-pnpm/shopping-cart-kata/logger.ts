export interface Logger {
  log(message: string): void;
  print(): string;
}

export class InMemoryLogger implements Logger {
  private messages: string[] = [];

  log(message: string): void {
    this.messages.push(message);
  }

  print(): string {
    return this.messages.join('\n');
  }
}
