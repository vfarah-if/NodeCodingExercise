import { render, screen } from '@testing-library/react';
import Commandbar from '../Commandbar';

import {
  DefaultCommandbar,
  CustomCommandbar,
} from '../Commandbar/Commandbar.stories';

describe('Commandbar', () => {
  const generate = jest.fn();
  const clear = jest.fn();
  const randomise = jest.fn();
  const simulate = jest.fn();

  beforeEach(() => {
    generate.mockClear();
    clear.mockClear();
    randomise.mockClear();
    simulate.mockClear();
  });

  test('should default expected command settings', () => {
    const { container } = render(
      <DefaultCommandbar
        {...DefaultCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should customise commandbar settings', () => {
    const { container } = render(
      <CustomCommandbar
        {...CustomCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should command clear event', () => {
    render(
      <Commandbar
        {...CustomCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );

    const clearButton = screen.getByText('Erase');
    clearButton.click();

    expect(clear).toHaveBeenCalledTimes(1);
  });

  test('should command generate event', () => {
    render(
      <Commandbar
        {...CustomCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );
    const generateButton = screen.getByText('Make it so');

    generateButton.click();

    expect(generate).toHaveBeenCalledTimes(1);
  });

  test('should command randomise event', () => {
    render(
      <Commandbar
        {...CustomCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );
    const randomiseButton = screen.getByText('Shuffle it');

    randomiseButton.click();

    expect(randomise).toHaveBeenCalledTimes(1);
  });

  test('should command simulate event', () => {
    render(
      <Commandbar
        {...CustomCommandbar.args}
        onClear={clear}
        onGenerate={generate}
        onRandomise={randomise}
        onSimulate={simulate}
      />
    );
    const simulateButton = screen.getByText('Animate');

    simulateButton.click();

    expect(simulate).toHaveBeenCalledTimes(1);
  });
});
