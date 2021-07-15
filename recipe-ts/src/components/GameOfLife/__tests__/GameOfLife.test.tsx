import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DefaultBoardOfEmptyCells } from '../GameOfLife.stories';

describe('GameOfLife', () => {
  describe('Given a default board', () => {
    test('should create a default sized empty board with all expected controls', () => {
      const { container } = render(<DefaultBoardOfEmptyCells />);

      expect(container).toMatchSnapshot();
    });
  });
});
