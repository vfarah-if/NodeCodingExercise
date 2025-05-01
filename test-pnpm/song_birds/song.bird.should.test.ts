import { countUniqueSongs } from './song.birds';

describe('song bird should', () => {
  test('sing no songs when there are no birds', () => {
    const actual = countUniqueSongs([]);

    expect(actual).toBe(0);
  });

  it('returns 3 if only one bird is singing', () => {
    const actual = countUniqueSongs(['A']);

    // One bird can perch on 3 branches
    expect(actual).toBe(3);
  });

  it('returns 18 if two birds are singing', () => {
    const actual = countUniqueSongs(['A', 'B']);

    // 3 branches, choose 2, assign 2 birds => 3 * 2! = 6
    expect(actual).toBe(18);
  });

  it('returns 36 if all three birds are singing', () => {
    const actual = countUniqueSongs(['A', 'B', 'C']);

    // 1 way to choose all branches, 3! assignments
    expect(actual).toBe(36);
  });

  it('returns total combinations for 1 to 3 birds', () => {
    const total =
      countUniqueSongs(['A']) + countUniqueSongs(['A', 'B']) + countUniqueSongs(['A', 'B', 'C']);
    expect(total).toBe(57);
  });
});
