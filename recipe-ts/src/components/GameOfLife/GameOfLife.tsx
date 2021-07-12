import React, { useState } from 'react';
import './style/index.css';

export interface GameOfLifeProps {
  boardSize: number;
  cellSize: number;
  gridColor: string;
  activeColor: string;
}

const GameOfLife: React.FC<GameOfLifeProps> = ({
  boardSize = 10,
  cellSize = 40,
  gridColor = 'gray',
  activeColor = 'blue',
}) => {
  const [board, setBoard] = useState(
    Array.from(Array(boardSize), () =>
      Array.from(Array(boardSize), () => false)
    )
  );
  console.log(board);
  return (
    <div
      className='grid'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${boardSize}, ${cellSize}px)`,
      }}
    >
      {board.map((columns, y) =>
        columns.map((rows, x) => (
          <div
            key={`[${y},${x}]`}
            className='cell'
            style={{
              width: cellSize,
              height: cellSize,
              border: `solid 1px ${gridColor}`,
              backgroundColor: board[y][x] ? activeColor : undefined,
            }}
          ></div>
        ))
      )}
    </div>
  );
};

export default GameOfLife;
