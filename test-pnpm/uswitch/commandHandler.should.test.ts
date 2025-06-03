import { EnergyPlan } from './calculateAnnualCost';
import { commandHandler } from './commandHandler';

describe('commandHandler', () => {
  let plans: Array<EnergyPlan>;
  beforeEach(() => {
    plans = [
      {
        supplier: 'sse',
        plan: 'standard',
        rates: [{ price: 13.5, threshold: 150 }, { price: 11.1, threshold: 100 }, { price: 10 }],
        standing_charge: 9,
      } as EnergyPlan,
    ];
  });
  test('should return null when exiting', () => {
    const output = commandHandler('exit');

    expect(output).toBeNull();
  });

  test('should return null command is null', () => {
    const output = commandHandler(null);

    expect(output).toBeNull();
  });

  test('should return formatted prices based on price at a 1000', () => {
    const output = commandHandler('price 1000', plans);

    expect(output).toEqual(['sse,standard,146.16']);
  });

  test('should return formatted prices based on given prices', () => {
    const output = commandHandler('price 1200', plans);

    expect(output).toEqual(['sse,standard,167.16']);
  });
});
