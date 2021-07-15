import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  DefaultBoardOfEmptyCells,
  CreateFiveByFiveBoardOfEmptyCells,
  SeedAllTwoByTwoWithActiveCells,
} from '../GameOfLife.stories';

describe('GameOfLife', () => {
  describe('Given a default board', () => {
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
});
