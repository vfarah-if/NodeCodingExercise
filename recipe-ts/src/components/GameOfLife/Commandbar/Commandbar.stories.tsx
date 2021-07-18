import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Commandbar, { CommandbarProps } from './CommandBar';

export default {
  title: 'Component/GameOfLife/Commandbar',
  component: Commandbar,
} as Meta;

const CommandbarTemplate: Story<CommandbarProps> = (args) => (
  <>
    <Commandbar
      {...args}
      onClear={action('onClear...')}
      onGenerate={action('onGenerate...')}
      onRandomise={action('onRandomise...')}
      onSimulate={action('onSimulate...')}
    />
  </>
);

export const DefaultCommandbar = CommandbarTemplate.bind({});
DefaultCommandbar.args = {};

export const CustomCommandbar = CommandbarTemplate.bind({});
CustomCommandbar.args = {
  title: "Conway's Game of life",
  clearDisplay: 'Erase',
  generateDisplay: 'Make it so',
  simulateDisplay: 'Animate',
  randomiseDisplay: 'Shuffle it',
};
