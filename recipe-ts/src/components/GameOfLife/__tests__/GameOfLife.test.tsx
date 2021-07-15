import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  DefaultBoardOfEmptyCells,
  CreateFiveByFiveBoardOfEmptyCells,
  SeedAllTwoByTwoWithActiveCells,
  SeedBlinkerOscillator,
} from '../GameOfLife.stories';

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
    test('should seed generate blinker oscillator pattern with generate button showing the blinker', () => {
      const { container } = render(
        <SeedBlinkerOscillator
          boardSize={SeedBlinkerOscillator.args?.boardSize}
          cellSize={SeedBlinkerOscillator.args?.cellSize}
          gridColor={SeedBlinkerOscillator.args?.gridColor}
          activeColor={SeedBlinkerOscillator.args?.activeColor}
          seedActivePositions={SeedBlinkerOscillator.args?.seedActivePositions}
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
  });
});
