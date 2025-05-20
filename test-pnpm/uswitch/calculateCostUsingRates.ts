import { EnergyPlan } from './calculateAnnualCost';

export function calculateCostUsingRates(plan: EnergyPlan, usage: number) {
  let result = 0;
  for (const rate of plan.rates) {
    if (rate.threshold) {
      const used = Math.min(usage, rate.threshold!);
      result += used * rate.price;
      usage -= used;
    } else {
      result += usage * rate.price;
    }
  }
  return result;
}
