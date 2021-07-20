import { render, screen } from '@testing-library/react';
import Cell from '../Cell';
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

  test('should allow the cell to be clicked and an event to be assigned', () => {
    const handleClick = jest.fn();
    // REMARKS: Need to explicitly use Cell when utilising onCellClick event
    render(<Cell {...BrightHappyCell.args} onCellClick={handleClick} />);

    const cell: HTMLElement = screen.getByText('(ツ)');
    expect(cell).toBeDefined();
    cell.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
