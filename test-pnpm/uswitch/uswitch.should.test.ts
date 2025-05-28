import { readPlansFromFile } from './readPlansFromFile';
import { EnergyPlan } from './calculateAnnualCost';
import { main } from './uswitch';
import readline from 'readline/promises';

jest.mock('./readPlansFromFile');
jest.mock('readline/promises', () => ({
  createInterface: jest.fn(),
}));
type ReadLineInterfaceMock = {
  prompt: jest.Mock;
  on: jest.Mock;
  close: jest.Mock;
};
describe('uswitch integration', () => {
  let originalArgv;
  let mockPlans: EnergyPlan[];
  let mockConsoleLog: jest.SpyInstance;
  let mockConsoleError: jest.SpyInstance;
  let mockConsoleDebug: jest.SpyInstance;
  let mockProcessExit: jest.SpyInstance;
  let mockReadlineInterface: ReadLineInterfaceMock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockPlans = [
      {
        supplier: 'sse',
        plan: 'standard',
        rates: [{ price: 13.5, threshold: 150 }, { price: 11.1, threshold: 100 }, { price: 10 }],
        standing_charge: 9,
      } as EnergyPlan,
    ];

    mockReadlineInterface = {
      prompt: jest.fn(),
      on: jest.fn(),
      close: jest.fn(),
    };

    (readline.createInterface as jest.Mock).mockReturnValue(mockReadlineInterface);

    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();
    mockConsoleError = jest.spyOn(console, 'error').mockImplementation();
    mockConsoleDebug = jest.spyOn(console, 'debug').mockImplementation();
    mockProcessExit = jest.spyOn(process, 'exit').mockImplementation();

    (readPlansFromFile as jest.Mock).mockResolvedValue(mockPlans);
    originalArgv = process.argv;
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  test('should exit if no file argument is provided', async () => {
    process.argv = ['node', 'uswitch.ts'];

    await main();

    expect(mockConsoleError).toHaveBeenCalledWith('Usage: uswitch plans.json');
    expect(mockProcessExit).toHaveBeenCalledWith(1);
  });

  describe('and when tring to add a price or cancelling', () => {
    let lineHandler: ((line: string) => void) | undefined;
    let closeHandler: (() => void) | undefined;

    beforeEach(() => {
      process.argv = ['node', 'uswitch.ts', 'plans.json'];
      mockReadlineInterface.on.mockImplementation((event: string, handler: unknown) => {
        if (event === 'line') lineHandler = handler as (line: string) => void;
      });
      mockReadlineInterface.on.mockImplementation((event: string, handler: unknown) => {
        if (event === 'line') lineHandler = handler as (line: string) => void;
        if (event === 'close') closeHandler = handler as () => void;
      });
    });

    test('should read plans and handle user input', async () => {
      await main();

      expect(readPlansFromFile).toHaveBeenCalledWith('plans.json');
      lineHandler('price 1000');
      expect(mockConsoleLog).toHaveBeenCalledWith('sse,standard,146.16');
    });

    test('should read plans and close', async () => {
      await main();

      expect(readPlansFromFile).toHaveBeenCalledWith('plans.json');
      lineHandler('exit');
      if (closeHandler) {
        closeHandler();
        expect(mockConsoleDebug).toHaveBeenCalledWith('Well done!');
      }
    });
  });
});
