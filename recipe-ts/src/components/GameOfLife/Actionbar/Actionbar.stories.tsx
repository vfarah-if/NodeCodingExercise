import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'

import Actionbar, { ActionbarProps } from './ActionBar'

export default {
  title: 'Component/GameOfLife/Actionbar',
  component: Actionbar,
} as Meta

const ActionbarTemplate: Story<ActionbarProps> = args => (
  <>
    <Actionbar
      {...args}
      onClear={action('onClear...')}
      onGenerate={action('onGenerate...')}
      onRandomise={action('onRandomise...')}
      onSimulate={action('onSimulate...')}
    />
  </>
)

export const DefaultActionbar = ActionbarTemplate.bind({})
DefaultActionbar.args = {}

export const CustomActionbar = ActionbarTemplate.bind({})
CustomActionbar.args = {
  title: "Conway's Game of life",
  clearDisplay: 'Erase',
  generateDisplay: 'Make it so',
  simulateDisplay: 'Animate',
  randomiseDisplay: 'Shuffle it',
}
