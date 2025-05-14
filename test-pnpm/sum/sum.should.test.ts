import { sum } from './sum';

describe('sum should', () => {
  test('sum two numbers', () => {
    const actual = sum(1, 2);

    expect(actual).toBe(3);
  });

  test('sum two numbers with negative', () => {
    const actual = sum(-1, -2);

    expect(actual).toBe(-3);
  });

  test('sum two numbers with zero', () => {
    const actual = sum(0, 0);

    expect(actual).toBe(0);
  });

  test('sum two numbers with decimal', () => {
    const actual = sum(1.5, 2.5);

    expect(actual).toBe(4);
  });

  test.each([
    { values: [1, 2], expected: 3 },
    { values: [-1, -2], expected: -3 },
    { values: [0, 0], expected: 0 },
    { values: [1.5, 2.5], expected: 4 },
    { values: [1, 2, 3], expected: 6 },
    { values: [1, 2, 3, 4, 5], expected: 15 },
    { values: [-1, -2, -3, -4, -5], expected: -15 },
    { values: [-1, 2, -3, 4, -5], expected: -3 },
  ])('sum $values to equal $expected', ({ values, expected }) => {
    const actual = sum(...values);

    expect(actual).toBe(expected);
  });
});
