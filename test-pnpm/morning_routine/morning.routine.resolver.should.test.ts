import { MorningRoutineResolver } from './morning.routine.resolver';

describe('MorningRoutineResolver should', () => {
  const sut = new MorningRoutineResolver();

  test('remind me to do exercise between 06:00 and 6:59', () => {
    const ukTimeBST = '2023-06-01T06:30:00+01:00';
    const expected = 'Do exercise';

    const result = sut.remindMeTo(new Date(ukTimeBST));

    expect(result).toBe(expected);
  });

  test('remind me not to do exercise between not 06:00 and 6:59', () => {
    const ukTimeBST = '2023-06-01T05:30:00+01:00';
    const notExpected = 'Do exercise';

    const result = sut.remindMeTo(new Date(ukTimeBST));

    expect(result).not.toBe(notExpected);
  });
});
