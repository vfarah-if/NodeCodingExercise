import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import GameOfLife, { GameOfLifeProps } from './GameOfLife';

export default {
  title: 'Component/GameOfLife',
  component: GameOfLife,
  argTypes: {
    gridColor: { control: 'color' },
    activeColor: { control: 'color' },
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

export const SeedAllTwoByTwoWithActiveCells = GameOfLifeTemplate.bind({});
SeedAllTwoByTwoWithActiveCells.args = {
  boardSize: 2,
  cellSize: 50,
  gridColor: 'black',
  activeColor: 'yellow',
  seedActivePositions: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ],
};

export const SeedBlinkerOscillator = GameOfLifeTemplate.bind({});
SeedBlinkerOscillator.args = {
  boardSize: 3,
  cellSize: 50,
  seedActivePositions: [
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ],
};
