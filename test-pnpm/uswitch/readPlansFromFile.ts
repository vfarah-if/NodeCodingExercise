import fs from 'fs/promises';
import { EnergyPlan } from './calculateAnnualCost';

export async function readPlansFromFile(filePath: string): Promise<Array<EnergyPlan>> {
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}
