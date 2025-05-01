import { countSingingSongs } from './song.birds';

describe('song bird should', () => {
  test('sing no songs when there are no birds', () => {
    const actual = countSingingSongs([]);

    expect(actual).toBe(0);
  });
});
