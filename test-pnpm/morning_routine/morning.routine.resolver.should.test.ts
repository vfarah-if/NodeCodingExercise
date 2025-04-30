import { MorningRoutineResolver } from './morning.routine.resolver';

describe('MorningRoutineResolver should', () => {
  const sut = new MorningRoutineResolver();
  test('remind me to do exercise between 06:00 and 6:59', () => {
    const actual = new Date('2023-10-01T06:30:00Z');
    const expected = 'Do exercise';

    const result = sut.remindMeTo(actual);

    expect(result).toBe(expected);
  });
});
