export interface Logger {
  log(message: string): void;
  print(): string;
  clear(): void;
}

export class InMemoryLogger implements Logger {
  private messages: string[];

  constructor() {
    this.clear();
  }

  clear(): void {
    this.messages = [];
  }

  log(message: string): void {
    this.messages.push(message);
  }

  print(): string {
    return this.messages.join('\n');
  }
}
