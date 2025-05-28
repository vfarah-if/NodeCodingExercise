import { calculateAnnualCost, EnergyPlan } from './calculateAnnualCost';

describe('calculateAnnualCost', () => {
  test('should correctly price a plan with multiple rates and thresholds, standing charge, and include VAT', () => {
    const plan = {
      supplier: 'sse',
      plan: 'standard',
      rates: [{ price: 13.5, threshold: 150 }, { price: 11.1, threshold: 100 }, { price: 10 }],
      standing_charge: 9,
    } as EnergyPlan;

    expect(calculateAnnualCost(plan, 1000)).toBe(146.16);
  });
});
