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
});
