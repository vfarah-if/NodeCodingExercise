import { calculateAnnualCost, EnergyPlan } from './calculateAnnualCost';

export function formatPlanPrice(energyPlan: EnergyPlan, usage: number): string {
  const amountIncludingVat = calculateAnnualCost(energyPlan, usage);
  return `${energyPlan.supplier},${energyPlan.plan},${amountIncludingVat.toFixed(2)}`;
}
