import Example from './Example';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Example', () => {
  test('should increment clicks when button fired', () => {
    render(<Example initial={0} />);
    expect(screen.queryByText('You clicked 0 times')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Click me'));

    expect(screen.queryByText('You clicked 1 times')).toBeInTheDocument();
  });
});
