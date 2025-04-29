import { sum } from './sum';

describe('sum', () => {
  test('should sum two numbers', () => {
    const actual = sum(1, 2);

    expect(actual).toBe(3);
  });

  test('should sum two numbers with negative', () => {
    const actual = sum(-1, -2);

    expect(actual).toBe(-3);
  });

  test('should sum two numbers with zero', () => {
    const actual = sum(0, 0);

    expect(actual).toBe(0);
  });

  test('should sum two numbers with decimal', () => {
    const actual = sum(1.5, 2.5);

    expect(actual).toBe(4);
  });

  test('should sume any amount of numbers', () => {
    const actual = sum(1, 2, 3);

    expect(actual).toBe(6);
  });
});
