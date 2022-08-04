import { render } from '@testing-library/react';
import { SimpleBoard } from '../Board/Board.stories';

describe('Board', () => {
  test('should output a board of items as children', () => {
    const { container } = render(<SimpleBoard {...SimpleBoard.args} />);

    expect(container).toMatchSnapshot();
  });
});
