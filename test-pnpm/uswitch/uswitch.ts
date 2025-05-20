import { EnergyPlan } from './calculateAnnualCost';
import { commandHandler } from './commandHandler';
import { readPlansFromFile } from './readPlansFromFile';
import readline from 'readline/promises';

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: uswitch plans.json');
    process.exit(1);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const plans = await readPlansFromFile(file);

  promptUserForPrices(rl, plans);

  // Fake it until you make it
  // const usage = 1000;
  // for (const plan of plans) {
  //   console.log(formatPlanPrice(plan, usage));
  // }
}

main();

function promptUserForPrices(rl: readline.Interface, plans: EnergyPlan[]): void {
  rl.prompt();
  rl.on('line', (line) => {
    const responses = commandHandler(line, plans);
    if (!responses) {
      rl.close();
    }
    for (const response of responses) {
      console.log(response);
    }
    rl.prompt();
  });

  rl.on('close', () => {
    console.debug('You have succeeded in faking it all the way dude!');
  });
}
