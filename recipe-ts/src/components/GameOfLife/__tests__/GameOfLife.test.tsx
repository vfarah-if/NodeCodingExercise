import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  DefaultBoardOfEmptyCells,
  CreateFiveByFiveBoardOfEmptyCells,
  SeedAllTwoByTwoWithActiveCells,
  SeedBlinkerOscillator,
  ToadOscillator,
  BeaconOscillator,
} from '../GameOfLife.stories';
jest.useFakeTimers();

describe('GameOfLife', () => {
  describe('given a default or configured board', () => {
    test('should create a default sized empty board with all expected controls', () => {
      const { container } = render(<DefaultBoardOfEmptyCells />);

      expect(container).toMatchSnapshot();
    });

    test('should configure a five by five board of empty cells with specific settings', () => {
      const { container } = render(
        <CreateFiveByFiveBoardOfEmptyCells
          {...CreateFiveByFiveBoardOfEmptyCells.args}
        />
      );

      expect(container).toMatchSnapshot();
    });

    test('should randomise values on a board using the randomise button', () => {
      const { container } = render(
        <CreateFiveByFiveBoardOfEmptyCells
          {...CreateFiveByFiveBoardOfEmptyCells.args}
          showCellInfo={true}
        />
      );
      const randomiseButton = getAndAssertButton('Randomise');

      for (let index = 0; index < 5; index++) {
        randomiseButton.click();
        const first = getAllActiveCells(container);

        randomiseButton.click();
        const second = getAllActiveCells(container);
        expect(first).not.toEqual(second);
      }
    });

    test('should allow click on cells to manually configure patterns', () => {
      const { container } = render(
        <CreateFiveByFiveBoardOfEmptyCells
          {...CreateFiveByFiveBoardOfEmptyCells.args}
          showCellInfo={true}
        />
      );

      const cells = getAllCells(container);
      cells.forEach((cell) => {
        (cell as HTMLDivElement).click();
      });

      expect(getAllActiveCells(container).length).toBe(cells.length);
    });

    test('should seed all cells as active', () => {
      const { container } = render(
        <SeedAllTwoByTwoWithActiveCells
          {...SeedAllTwoByTwoWithActiveCells.args}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('given various patterns', () => {
    test('should seed generate blinker oscillator pattern with generate button', () => {
      const { container } = render(
        <SeedBlinkerOscillator {...SeedBlinkerOscillator.args} />
      );

      const generateButton = getAndAssertButton('Generate');

      const flip = getGrid(container);
      expect(flip).toMatchSnapshot('blink');

      generateButton.click();
      const flop = getGrid(container);
      expect(flop).toMatchSnapshot('blink');

      generateButton.click();
      expect(getGrid(container)).toBe(flip);

      generateButton.click();
      expect(getGrid(container)).toBe(flop);
    });

    test('should seed toad oscillator pattern with generate button', () => {
      const { container } = render(<ToadOscillator {...ToadOscillator.args} />);

      const generateButton = getAndAssertButton('Generate');
      const flip = getGrid(container);
      expect(flip).toMatchSnapshot('toad');

      generateButton.click();
      const flop = getGrid(container);
      expect(flop).toMatchSnapshot('toad');

      generateButton.click();
      expect(getGrid(container)).toBe(flip);

      generateButton.click();
      expect(getGrid(container)).toBe(flop);
    });

    test('should seed toad oscillator and then clear this with the clear button', () => {
      const { container } = render(<ToadOscillator {...ToadOscillator.args} />);
      const activeCells = getAllActiveCells(container);
      expect(activeCells).toMatchSnapshot('active-toad');
      expect(activeCells.length).toBe(6);

      const clearButton = getAndAssertButton('Clear');
      clearButton.click();

      const clearedCells = getAllActiveCells(container);
      expect(clearedCells).not.toEqual(activeCells);
      expect(clearedCells.length).toEqual(0);
    });

    test('should seed beacon oscillator with generate button', () => {
      const { container } = render(
        <BeaconOscillator {...BeaconOscillator.args} />
      );

      const generateButton = getAndAssertButton('Generate');
      const flip = getAllCells(container);
      expect(flip).toMatchSnapshot('initial');

      generateButton.click();
      const flop = getAllCells(container);
      expect(flop).toMatchSnapshot('beacon');

      generateButton.click();
      expect(getAllCells(container)).toEqual(flip);

      generateButton.click();
      expect(getAllCells(container)).toEqual(flop);
    });

    test('should simulate beacon oscillator toggling button calling setTimeout', () => {
      render(<BeaconOscillator {...BeaconOscillator.args} />);

      const startSimulateButton = getAndAssertButton('Start Simulation');
      startSimulateButton.click();

      const stopSimulateButton = getAndAssertButton('Stop Simulation');
      stopSimulateButton.click();

      expect(setTimeout).toHaveBeenCalled();
    });
  });
});

function getAndAssertButton(name: string): HTMLButtonElement {
  const button = screen.getByRole('button', { name }) as HTMLButtonElement;
  expect(button).toHaveTextContent(name);
  return button;
}

function getGrid(container: Element): HTMLDivElement {
  return container.querySelector('.grid') as HTMLDivElement;
}

function getAllCells(container: Element): NodeListOf<HTMLDivElement> {
  return container.querySelectorAll('.cell') as NodeListOf<HTMLDivElement>;
}

function getAllActiveCells(container: Element): NodeListOf<HTMLDivElement> {
  return container.querySelectorAll(`.cell.active`);
}
