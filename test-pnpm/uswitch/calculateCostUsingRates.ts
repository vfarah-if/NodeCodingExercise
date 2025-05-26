import { EnergyPlan, Rate } from './calculateAnnualCost';

export function calculateCostUsingRates(plan: EnergyPlan, usage: number) {
  let usedUsage = usage;
  let result = 0;
  for (const rate of plan.rates) {
    if (rate.threshold) {
      const used = Math.min(usedUsage, rate.threshold!);
      result += used * rate.price;
      usedUsage -= used;
    } else {
      result += calculateFlatRateUsage(usedUsage, rate);
    }
  }
  return result;
}

function calculateFlatRateUsage(usage: number, rate: Rate) {
  return usage * rate.price;
}
