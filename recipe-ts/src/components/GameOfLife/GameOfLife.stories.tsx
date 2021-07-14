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

export const ToadOscillator = GameOfLifeTemplate.bind({});
ToadOscillator.args = {
  boardSize: 6,
  cellSize: 50,
  gridColor: 'red',
  activeColor: 'green',
  seedActivePositions: [
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ],
};

export const BeaconOscillator = GameOfLifeTemplate.bind({});
BeaconOscillator.args = {
  boardSize: 6,
  cellSize: 50,
  gridColor: 'black',
  activeColor: 'red',
  seedActivePositions: [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },

    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
  ],
};

export const DieHard = GameOfLifeTemplate.bind({});
DieHard.args = {
  boardSize: 15,
  cellSize: 50,
  gridColor: 'black',
  activeColor: 'red',
  seedActivePositions: [
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 3, y: 5 },

    { x: 8, y: 3 },

    { x: 7, y: 5 },
    { x: 8, y: 5 },
    { x: 9, y: 5 },
  ],
};

export const RPentiminoWithCellInformation = GameOfLifeTemplate.bind({});
RPentiminoWithCellInformation.args = {
  boardSize: 5,
  cellSize: 50,
  gridColor: 'yellow',
  activeColor: 'red',
  showCellInfo: true,
  seedActivePositions: [
    { x: 2, y: 1 },
    { x: 3, y: 1 },

    { x: 1, y: 2 },
    { x: 2, y: 2 },

    { x: 2, y: 3 },
  ],
};

export const SquareFlower = GameOfLifeTemplate.bind({});
SquareFlower.args = {
  boardSize: 10,
  cellSize: 50,
  gridColor: 'gray',
  activeColor: 'pink',
  seedActivePositions: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },

    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
    { x: 0, y: 6 },
    { x: 0, y: 7 },
    { x: 0, y: 8 },
    { x: 0, y: 9 },

    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
    { x: 6, y: 9 },
    { x: 7, y: 9 },
    { x: 8, y: 9 },
    { x: 9, y: 9 },

    { x: 9, y: 1 },
    { x: 9, y: 2 },
    { x: 9, y: 3 },
    { x: 9, y: 4 },
    { x: 9, y: 5 },
    { x: 9, y: 6 },
    { x: 9, y: 7 },
    { x: 9, y: 8 },
  ],
};
