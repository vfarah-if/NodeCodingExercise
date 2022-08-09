import React from 'react'
import './style/index.css'

export interface BoardProps {
  boardSize?: number
  cellSize?: number
  children?: React.ReactNode
}

const Board: React.FC<BoardProps> = ({
  boardSize = 20,
  cellSize = 50,
  children,
}) => {
  return (
    <div
      className='grid'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${boardSize}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${boardSize}, ${cellSize}px)`,
      }}
    >
      {children}
    </div>
  )
}

export default Board
