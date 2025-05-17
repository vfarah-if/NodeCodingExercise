describe('mars rover should', () => {
  test('report its default start position', () => {
    let marsRover = new MarsRover();

    const actual = marsRover.Execute('');

    expect(actual).toBe('0:0:N');
  });
});
