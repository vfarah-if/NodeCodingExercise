import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Cell, { CellProps } from './Cell';

export default {
  title: 'Component/GameOfLife/Cell',
  component: Cell,
} as Meta;

const CellTemplate: Story<CellProps> = (args) => (
  <>
    <Cell {...args} />
  </>
);

export const DefaultCell = CellTemplate.bind({});
DefaultCell.args = {};
