import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {
  DefaultBoardOfEmptyCells,
  CreateFiveByFiveBoardOfEmptyCells,
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
  });
});
