import produce from 'immer';
import React, { useEffect, useState } from 'react';
import './style/index.css';

export interface Position {
  x: number;
  y: number;
}
export interface GameOfLifeProps {
  boardSize: number;
  cellSize: number;
  gridColor: string;
  activeColor: string;
  seedActivePositions?: Array<Position>;
}

const GameOfLife: React.FC<GameOfLifeProps> = ({
  boardSize = 10,
  cellSize = 40,
  gridColor = 'gray',
  activeColor = 'blue',
  seedActivePositions = [],
}) => {
  const [board, setBoard] = useState(
    Array.from(Array(boardSize), () =>
      Array.from(Array(boardSize), () => false)
    )
  );
  // console.debug(board);
  const handleCellClick = (x: number, y: number): void => {
    const modifiedBoard = produce(board, (boardWithNewState) => {
      boardWithNewState[y][x] = !boardWithNewState[y][x];
    });
    setBoard(modifiedBoard);
  };

  useEffect(() => {
    if (seedActivePositions && seedActivePositions.length > 0) {
      const modifiedBoard = produce(board, (boardWithNewState) => {
        seedActivePositions.forEach(
          (position) =>
            (boardWithNewState[position.y][position.x] = !boardWithNewState[
              position.y
            ][position.x])
        );
      });
      setBoard(modifiedBoard);
    }
  }, [seedActivePositions]);

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
            onClick={() => handleCellClick(x, y)}
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
