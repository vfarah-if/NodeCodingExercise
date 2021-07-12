import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import GameOfLife, { GameOfLifeProps } from './GameOfLife';

export default {
  title: 'Component/GameOfLife',
  component: GameOfLife,
  argTypes: {
    gridColor: { control: 'color' },
  },
} as Meta;

const GameOfLifeTemplate: Story<GameOfLifeProps> = (args) => (
  <>
    <GameOfLife {...args} />
  </>
);

export const DefaultBoardOfEmptyCells = GameOfLifeTemplate.bind({});
DefaultBoardOfEmptyCells.args = {};

export const CreateFiveByFiveBoardOfEmptyCells = GameOfLifeTemplate.bind({});
CreateFiveByFiveBoardOfEmptyCells.args = {
  boardSize: 5,
  cellSize: 50,
  gridColor: 'orange',
  activeColor: 'green',
};
