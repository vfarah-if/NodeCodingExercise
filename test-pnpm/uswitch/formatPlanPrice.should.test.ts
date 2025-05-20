import { EnergyPlan } from './calculateAnnualCost';
import { formatPlanPrice } from './formatPlanPrice';

describe('formatPlanPrice', () => {
  test('should return the correct string for a given plan and usage', () => {
    const plan = {
      supplier: 'sse',
      plan: 'standard',
      rates: [{ price: 13.5, threshold: 150 }, { price: 11.1, threshold: 100 }, { price: 10 }],
      standing_charge: 9,
    } as EnergyPlan;

    const actual = formatPlanPrice(plan, 1000);

    expect(actual).toBe('sse,standard,146.16');
  });
});
