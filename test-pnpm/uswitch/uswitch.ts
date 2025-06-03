import { EnergyPlan } from './calculateAnnualCost';
import { commandHandler } from './commandHandler';
import { readPlansFromFile } from './readPlansFromFile';
import readline from 'readline/promises';

export async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: uswitch plans.json');
    process.exit(1);
  }

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const plans = await readPlansFromFile(file);

  promptUserForPrices(terminal, plans);

  // Fake it until you make it
  // const usage = 1000;
  // for (const plan of plans) {
  //   console.log(formatPlanPrice(plan, usage));
  // }
}

// Only run main if this file is being run directly
if (require.main === module) {
  main();
}

function promptUserForPrices(terminal: readline.Interface, plans: EnergyPlan[]): void {
  terminal.prompt();
  
  terminal.on('line', (line) => {
    const responses = commandHandler(line, plans);
    if (!responses) {
      terminal.close();
    } else {
      for (const response of responses) {
        console.log(response);
      }
      terminal.prompt(true);
    }
  });

  terminal.on('close', () => {
    console.debug('Well done!');
  });
}
