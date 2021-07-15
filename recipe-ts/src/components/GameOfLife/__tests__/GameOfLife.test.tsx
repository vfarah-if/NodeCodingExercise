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
  describe('Given a default or configured board', () => {
    test('should create a default sized empty board with all expected controls', () => {
      const { container } = render(<DefaultBoardOfEmptyCells />);

      expect(container).toMatchSnapshot();
    });

    test('should configure a five by five board of empty cells with specific settings', () => {
      const { container } = render(
        <CreateFiveByFiveBoardOfEmptyCells
          boardSize={CreateFiveByFiveBoardOfEmptyCells.args?.boardSize}
          cellSize={CreateFiveByFiveBoardOfEmptyCells.args?.cellSize}
          gridColor={CreateFiveByFiveBoardOfEmptyCells.args?.gridColor}
          activeColor={CreateFiveByFiveBoardOfEmptyCells.args?.activeColor}
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

      const randomiseButton = screen.getByRole('button', {
        name: 'Randomise',
      });
      expect(randomiseButton).toHaveTextContent('Randomise');

      for (let index = 0; index < 5; index++) {
        randomiseButton.click();
        const activeBackgroundColor = ".cell[style*='background-color: green']";
        const before = container.querySelectorAll(activeBackgroundColor);

        randomiseButton.click();
        const after = container.querySelectorAll(activeBackgroundColor);
        expect(before).not.toEqual(after);
      }
    });

    test('should allow click on cells to manually configure patterns', () => {
      const { container } = render(
        <CreateFiveByFiveBoardOfEmptyCells
          {...CreateFiveByFiveBoardOfEmptyCells.args}
          showCellInfo={true}
        />
      );

      const cells = container.querySelectorAll('.cell');
      cells.forEach((cell) => {
        (cell as HTMLDivElement).click();
      });

      expect(
        container.querySelectorAll(".cell[style*='background-color: green']")
          .length
      ).toBe(cells.length);
    });

    test('should seed all cells as active', () => {
      const { container } = render(
        <SeedAllTwoByTwoWithActiveCells
          boardSize={SeedAllTwoByTwoWithActiveCells.args?.boardSize}
          cellSize={SeedAllTwoByTwoWithActiveCells.args?.cellSize}
          gridColor={SeedAllTwoByTwoWithActiveCells.args?.gridColor}
          activeColor={SeedAllTwoByTwoWithActiveCells.args?.activeColor}
          seedActivePositions={
            SeedAllTwoByTwoWithActiveCells.args?.seedActivePositions
          }
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Given various patterns', () => {
    test('should seed generate blinker oscillator pattern with generate button', () => {
      const { container } = render(
        <SeedBlinkerOscillator
          boardSize={SeedBlinkerOscillator.args?.boardSize}
          cellSize={SeedBlinkerOscillator.args?.cellSize}
          gridColor={SeedBlinkerOscillator.args?.gridColor}
          activeColor={SeedBlinkerOscillator.args?.activeColor}
          seedActivePositions={SeedBlinkerOscillator.args?.seedActivePositions}
          showCellInfo={SeedBlinkerOscillator.args?.showCellInfo}
        />
      );

      const generateButton = screen.getByRole('button', { name: 'Generate' });
      expect(generateButton).toHaveTextContent('Generate');

      const flip = container.querySelector('.grid');
      expect(flip).toMatchSnapshot('blink');

      generateButton.click();
      const flop = container.querySelector('.grid');
      expect(flop).toMatchSnapshot('blink');

      generateButton.click();
      expect(container.querySelector('.grid')).toBe(flip);

      generateButton.click();
      expect(container.querySelector('.grid')).toBe(flop);
    });

    test('should seed toad oscillator pattern with generate button', () => {
      const { container } = render(
        <ToadOscillator
          boardSize={ToadOscillator.args?.boardSize}
          cellSize={ToadOscillator.args?.cellSize}
          gridColor={ToadOscillator.args?.gridColor}
          activeColor={ToadOscillator.args?.activeColor}
          seedActivePositions={ToadOscillator.args?.seedActivePositions}
          showCellInfo={ToadOscillator.args?.showCellInfo}
        />
      );

      const generateButton = screen.getByRole('button', { name: 'Generate' });
      const flip = container.querySelector('.grid');
      expect(flip).toMatchSnapshot('toad');

      generateButton.click();
      const flop = container.querySelector('.grid');
      expect(flop).toMatchSnapshot('toad');

      generateButton.click();
      expect(container.querySelector('.grid')).toBe(flip);

      generateButton.click();
      expect(container.querySelector('.grid')).toBe(flop);
    });

    test('should seed toad oscillator and then clear this with the clear button', () => {
      const { container } = render(<ToadOscillator {...ToadOscillator.args} />);

      const clearButton = screen.getByRole('button', {
        name: 'Clear',
      });
      expect(clearButton).toHaveTextContent('Clear');
      const activeBackgroundColor = ".cell[style*='background-color: green']";
      const activeCells = container.querySelectorAll(activeBackgroundColor);
      expect(activeCells).toMatchSnapshot('active-toad');
      expect(activeCells.length).toBe(6);

      clearButton.click();
      const clearedCells = container.querySelectorAll(activeBackgroundColor);
      expect(clearedCells).not.toEqual(activeCells);
      expect(clearedCells.length).toEqual(0);
    });

    test('should seed beacon oscillator with generate button', () => {
      const { container } = render(
        <BeaconOscillator {...BeaconOscillator.args} />
      );

      const generateButton = screen.getByRole('button', { name: 'Generate' });
      const initial = container.querySelectorAll('.cell');
      expect(initial).toMatchSnapshot('initial');

      generateButton.click();
      const alternate = container.querySelectorAll('.cell');
      expect(alternate).toMatchSnapshot('beacon');

      generateButton.click();
      expect(container.querySelectorAll('.cell')).toEqual(initial);

      generateButton.click();
      expect(container.querySelectorAll('.cell')).toEqual(alternate);
    });

    test('should simulate beacon oscillator with simulate button calling timeouts', () => {
      render(<BeaconOscillator {...BeaconOscillator.args} />);

      const startSimulateButton = screen.getByRole('button', {
        name: 'Start Simulation',
      });
      expect(startSimulateButton).toHaveTextContent('Start Simulation');
      startSimulateButton.click();

      const stopSimulateButton = screen.getByRole('button', {
        name: 'Stop Simulation',
      });
      expect(stopSimulateButton).toHaveTextContent('Stop Simulation');
      stopSimulateButton.click();

      expect(setTimeout).toHaveBeenCalled();
    });
  });
});
