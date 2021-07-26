import { render } from '@testing-library/react';
import { SimpleBoard } from '../Board/Board.stories';

describe('Board', () => {
  test('should output a board of simpl items as children', () => {
    const { container } = render(<SimpleBoard {...SimpleBoard.args} />);

    expect(container).toMatchSnapshot();
  });
});
