import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import Cell, { CellProps } from './Cell';

export default {
  title: 'Component/GameOfLife/Cell',
  component: Cell,
  argTypes: {
    cellBorderColor: { control: 'color' },
    cellBackgroundColor: { control: 'color' },
    cellActiveColor: { control: 'color' },
  },
} as Meta;

const CellTemplate: Story<CellProps> = (args) => (
  <>
    <Cell {...args} onCellClick={action('onCellClicked...')} />
  </>
);

export const DefaultCell = CellTemplate.bind({});
DefaultCell.args = {};

export const BrightHappyCell = CellTemplate.bind({});
BrightHappyCell.args = {
  cellSize: 50,
  cellBorderColor: 'orange',
  cellBackgroundColor: 'yellow',
  cellActiveColor: 'blue',
  displayText: '(ツ)',
  isActive: false,
};
