import { applyVAT } from './applyVAT';
import { calculateCostUsingRates } from './calculateCostUsingRates';
import { convertPenceToPounds } from './convertPenceToPounds';

export interface Rate {
  price: number;
  threshold?: number;
}

export interface EnergyPlan {
  supplier: string;
  plan: string;
  rates: Rate[];
  standing_charge: number;
}

const DAYS_PER_YEAR = 365;
const VAT_RATE = 5 / 100;

export function calculateAnnualCost(plan: EnergyPlan, usage: number): number {
  const annualStandingCharge = DAYS_PER_YEAR * plan.standing_charge;
  const cost = calculateCostUsingRates(plan, usage);
  const totalInPence = cost + annualStandingCharge;
  const totalWithVAT = applyVAT(totalInPence, VAT_RATE);
  return convertPenceToPounds(totalWithVAT);
  // Fake it until you make it (if you don't want to do the maths in the beginning)
  // if (usage === 1000) {
  //   return 146.16;
  // }
  // return 167.16;
}
