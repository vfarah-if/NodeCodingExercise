import { render } from '@testing-library/react';
import { BrightHappyCell, DefaultCell } from '../Cell/Cell.stories';

describe('Cell', () => {
  test('should render a cell with default values', () => {
    const { container } = render(<DefaultCell {...DefaultCell.args} />);

    expect(container).toMatchSnapshot();
  });

  test('should render a cell with configured values', () => {
    const { container } = render(<BrightHappyCell {...BrightHappyCell.args} />);

    expect(container).toMatchSnapshot();
  });
});
