describe('mars rover should', () => {
  test('report its default start position', () => {
    let marsRover = new MarsRover();

    const actual = marsRover.execute('');

    expect(actual).toBe('0:0:N');
  });
});

export class MarsRover {
  execute(command: string): string {
    return '0:0:N';
  }
}
