import { Meta, Story } from '@storybook/react/types-6-0'
import Board, { BoardProps } from './Board'

export default {
  title: 'Component/GameOfLife/Board',
  component: Board,
} as Meta

const BoardTemplate: Story<BoardProps> = args => (
  <>
    <Board {...args}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Board>
  </>
)

export const SimpleBoard = BoardTemplate.bind({})
SimpleBoard.args = { boardSize: 2, cellSize: 40 }
