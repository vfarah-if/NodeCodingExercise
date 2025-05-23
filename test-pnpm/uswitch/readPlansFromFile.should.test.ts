import path from 'node:path';
import { readPlansFromFile } from './readPlansFromFile';

describe('readPlansFromFile should', () => {
  test('read energy plans from a file', async () => {
    const filePath = path.join(__dirname, './plans.json');

    const plans = await readPlansFromFile(filePath);

    expect(plans.length).toBeGreaterThan(0);
    expect(plans[0].supplier).toBe('sse');
  });
});
