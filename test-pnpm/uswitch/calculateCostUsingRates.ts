import { EnergyPlan, Rate } from './calculateAnnualCost';

export function calculateCostUsingRates(plan: EnergyPlan, usageInKWH: number) {
  let usage = usageInKWH;
  let cost = 0;
  for (const rate of plan.rates) {
    if (rate.threshold) {
      const used = Math.min(usage, rate.threshold!);
      cost += calculateFlatRateUsage(used, rate);
      usage -= used;
    } else {
      cost += calculateFlatRateUsage(usage, rate);
    }
  }
  return cost;
}

function calculateFlatRateUsage(usage: number, rate: Rate) {
  return usage * rate.price;
}
