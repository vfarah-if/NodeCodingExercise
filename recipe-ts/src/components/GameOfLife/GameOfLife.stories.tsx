import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import GameOfLife, { GameOfLifeProps } from './GameOfLife';

export default {
  title: 'Component/GameOfLife',
  component: GameOfLife,
  argTypes: {
    gridColor: { control: 'color' },
    activeColor: { control: 'color' },
    backgroundColor: { control: 'color' },
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
  backgroundColor: 'white',
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
  backgroundColor: 'white',
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
  showCellInfo: true,
  backgroundColor: 'white',
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
  showCellInfo: true,
  backgroundColor: 'white',
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
  showCellInfo: true,
  backgroundColor: 'white',
};

export const PentaDecathlon = GameOfLifeTemplate.bind({});
PentaDecathlon.args = {
  boardSize: 20,
  cellSize: 50,
  gridColor: 'red',
  activeColor: 'green',
  seedActivePositions: [
    { x: 9, y: 4 },
    { x: 8, y: 5 },
    { x: 9, y: 5 },
    { x: 10, y: 5 },
    { x: 7, y: 6 },
    { x: 8, y: 6 },
    { x: 9, y: 6 },
    { x: 10, y: 6 },
    { x: 11, y: 6 },

    { x: 9, y: 15 },
    { x: 8, y: 14 },
    { x: 9, y: 14 },
    { x: 10, y: 14 },
    { x: 7, y: 13 },
    { x: 8, y: 13 },
    { x: 9, y: 13 },
    { x: 10, y: 13 },
    { x: 11, y: 13 },
  ],
  showCellInfo: true,
  backgroundColor: 'white',
};

export const Glider = GameOfLifeTemplate.bind({});
Glider.args = {
  boardSize: 20,
  cellSize: 50,
  gridColor: 'red',
  activeColor: 'green',
  seedActivePositions: [
    { x: 1, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 1, y: 2 },
    { x: 0, y: 2 },
  ],
  showCellInfo: true,
  backgroundColor: 'white',
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
  showCellInfo: false,
  backgroundColor: 'lightskyblue',
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
  backgroundColor: 'white',
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

export const GosperGliderGun = GameOfLifeTemplate.bind({});
GosperGliderGun.args = {
  boardSize: 35,
  cellSize: 20,
  gridColor: 'brown',
  activeColor: 'red',
  showCellInfo: false,
  seedActivePositions: [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },

    { x: 8, y: 1 },
    { x: 9, y: 1 },
    { x: 8, y: 2 },
    { x: 9, y: 2 },

    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },

    { x: 23, y: 10 },
    { x: 24, y: 10 },
    { x: 26, y: 10 },
    { x: 27, y: 10 },

    { x: 22, y: 11 },
    { x: 28, y: 11 },

    { x: 22, y: 12 },
    { x: 29, y: 12 },
    { x: 22, y: 13 },
    { x: 28, y: 13 },
    { x: 23, y: 13 },
    { x: 24, y: 13 },
    { x: 27, y: 14 },

    { x: 31, y: 12 },
    { x: 32, y: 12 },
    { x: 31, y: 13 },
    { x: 32, y: 13 },

    { x: 21, y: 18 },
    { x: 22, y: 18 },
    { x: 21, y: 19 },

    { x: 22, y: 20 },
    { x: 23, y: 20 },
    { x: 24, y: 20 },
    { x: 24, y: 21 },
  ],
  backgroundColor: 'black',
};
