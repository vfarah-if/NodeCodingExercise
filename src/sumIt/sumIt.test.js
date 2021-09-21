import { sumIt } from './sumIt';

describe('sumIt', () => {
  it('should sum all values in the array', () => {
    const actual = sumIt(1, 2, 3, 4);

    expect(actual).toBe(10);
  });
});
