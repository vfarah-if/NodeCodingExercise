import { EnergyPlan } from './calculateAnnualCost';
import { formatPlanPrice } from './formatPlanPrice';

export function commandHandler(
  command: string,
  plans: Array<EnergyPlan> | null = null,
): string[] | null {
  if (command?.toLowerCase().startsWith('price')) {
    const priceArray = command.split(/\s/);
    const price = priceArray[1];
    const usage = Number.parseInt(price);
    return plans.map((plan) => formatPlanPrice(plan, usage));
    // fake it until you make it :)
    // if (price === '1000') return ['sse,standard,146.16'];
    // if (price === '1200') return ['sse,standard,167.16'];
  }
  return null;
}
