import { render, screen } from '@testing-library/react';
import Commandbar from '../Commandbar';

import {
  DefaultCommandbar,
  CustomCommandbar,
} from '../Commandbar/Commandbar.stories';

describe('Commandbar', () => {
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

  test('should default expected command settings', () => {
    const { container } = render(
      <DefaultCommandbar
        {...DefaultCommandbar.args}
        onClear={clearHandler}
        onGenerate={generateHandler}
        onRandomise={randomiseHandler}
        onSimulate={simulateHandler}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should customise commandbar settings', () => {
    const { container } = render(
      <CustomCommandbar
        {...CustomCommandbar.args}
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
      <Commandbar
        {...CustomCommandbar.args}
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
      <Commandbar
        {...CustomCommandbar.args}
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
      <Commandbar
        {...CustomCommandbar.args}
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
      <Commandbar
        {...CustomCommandbar.args}
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
