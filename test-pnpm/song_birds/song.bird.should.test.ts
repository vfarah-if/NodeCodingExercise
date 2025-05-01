import { countSingingSongs } from './song.birds';

describe('song bird should', () => {
  test('sing no songs when there are no birds', () => {
    const actual = countSingingSongs([]);

    expect(actual).toBe(0);
  });

  it('returns 3 if only one bird is singing', () => {
    const actual = countSingingSongs(['A']);

    // One bird can perch on 3 branches
    expect(actual).toBe(3);
  });

  it('returns 18 if two birds are singing', () => {
    const actual = countSingingSongs(['A', 'B']);

    // 3 branches, choose 2, assign 2 birds => 3 * 2! = 6
    expect(actual).toBe(18);
  });

  it('returns 36 if all three birds are singing', () => {
    const actual = countSingingSongs(['A', 'B', 'C']);

    // 1 way to choose all branches, 3! assignments
    expect(actual).toBe(36);
  });
});
