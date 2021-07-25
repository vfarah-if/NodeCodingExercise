import { render, screen } from '@testing-library/react';
import Actionbar from '../Actionbar';

import {
  DefaultActionbar,
  CustomActionbar,
} from '../Actionbar/Actionbar.stories';

describe('Actionbar', () => {
  const generateHandler = jest.fn();
  const clearHandler = jest.fn();
  const randomiseHandler = jest.fn();
  const simulateHandler = jest.fn();

  beforeEach(() => {
    generateHandler.mockClear();
    clearHandler.mockClear();
    randomiseHandler.mockClear();
    simulateHandler.mockClear();
  });

  test('should default expected action settings', () => {
    const { container } = render(
      <DefaultActionbar
        {...DefaultActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should customise action bar settings', () => {
    const { container } = render(
      <CustomActionbar
        {...CustomActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should command clear event', () => {
    render(
      <Actionbar
        {...CustomActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );

    const clearButton = screen.getByText('Erase');
    clearButton.click();

    expect(clearHandler).toHaveBeenCalledTimes(1);
  });

  test('should command generate event', () => {
    render(
      <Actionbar
        {...CustomActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );
    const generateButton = screen.getByText('Make it so');

    generateButton.click();

    expect(generateHandler).toHaveBeenCalledTimes(1);
  });

  test('should command randomise event', () => {
    render(
      <Actionbar
        {...CustomActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );
    const randomiseButton = screen.getByText('Shuffle it');

    randomiseButton.click();

    expect(randomiseHandler).toHaveBeenCalledTimes(1);
  });

  test('should command simulate event', () => {
    render(
      <Actionbar
        {...CustomActionbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );
    const simulateButton = screen.getByText('Animate');

    simulateButton.click();

    expect(simulateHandler).toHaveBeenCalledTimes(1);
  });
});
