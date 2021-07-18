import { render, screen } from '@testing-library/react';

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

    //TODO : Figure out why this is not working as expected
    // const generateButton = getAndAssertButton('Generate');
    // generateButton.click();
    // expect(generate).toHaveBeenCalledTimes(1);
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
});

export function getAndAssertButton(name: string): HTMLButtonElement {
  const button = screen.getByRole('button', { name }) as HTMLButtonElement;
  expect(button).toHaveTextContent(name);
  return button;
}
