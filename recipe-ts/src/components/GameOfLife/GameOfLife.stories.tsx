import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import GameOfLife, { GameOfLifeProps } from './GameOfLife';

export default {
  title: 'Component/GameOfLife',
  component: GameOfLife,
} as Meta;

const GameOfLifeTemplate: Story<GameOfLifeProps> = (args) => (
  <>
    <GameOfLife {...args} />
  </>
);

export const DefaultLayout = GameOfLifeTemplate.bind({});
DefaultLayout.args = {};
