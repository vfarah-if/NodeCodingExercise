import produce from 'immer';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import './style/index.css';

type ButtonCallbackType = () => void;

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
  const [isRunning, setIsRunning] = useState(false);

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

  const handleCellClick = (x: number, y: number): void => {
    const modifiedBoard = produce(board, (boardWithNewState) => {
      boardWithNewState[y][x] = !boardWithNewState[y][x];
    });
    setBoard(modifiedBoard);
  };

  const generate = useCallback<ButtonCallbackType>(() => {
    setBoard((currentBoard) => {
      const isOnBoard = (x: number, y: number): boolean => {
        return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
      };

      const getNeighboursByPosition = (
        x: number,
        y: number
      ): Array<boolean> => {
        const yRange = [y - 1, y, y + 1];
        const xRange = [x - 1, x, x + 1];
        const neighbours = Array<boolean>();
        yRange.forEach((row) => {
          xRange.forEach((col) => {
            const isNotCentralCell = row !== y || col !== x;
            if (isNotCentralCell && isOnBoard(col, row)) {
              neighbours.push(board[row][col]);
            }
          });
        });
        return neighbours;
      };
      return produce(currentBoard, (newBoard) => {
        for (let y = 0; y < boardSize; y++) {
          for (let x = 0; x < boardSize; x++) {
            const neighbours = getNeighboursByPosition(x, y);
            const liveNeighbours = neighbours.filter((item) => item === true);
            let isAlive = board[y][x];
            const isFertile = () => !isAlive && liveNeighbours.length === 3;
            const isThriving = () => isAlive && liveNeighbours.length === 2;
            const isOverPopulated = () => liveNeighbours.length > 3;
            const isUnderPopulated = () => liveNeighbours.length < 2;

            if (isFertile() || isThriving()) {
              isAlive = true;
            } else if (isOverPopulated() || isUnderPopulated()) {
              isAlive = false;
            }
            newBoard[y][x] = isAlive;
          }
        }
      });
    });
  }, [board, boardSize]);

  const runSimulation = useCallback<ButtonCallbackType>((): void => {
    generate();
  }, [generate]);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        runSimulation();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isRunning, runSimulation]);

  const simulate = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <header>
        <div className='wrapper'>
          <div>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fill='none' fillRule='evenodd'>
                <path
                  d='M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z'
                  fill='#FFF'
                />
                <path
                  d='M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z'
                  fill='#555AB9'
                />
                <path
                  d='M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z'
                  fill='#91BAF8'
                />
              </g>
            </svg>
            <h1>Conway's Game of Life</h1>
          </div>
          <div>
            <Button primary size='medium' onClick={generate} label='Generate' />
            <Button
              primary
              size='medium'
              onClick={simulate}
              label={isRunning ? 'Stop Simulation' : 'Start Simulation'}
            />
          </div>
        </div>
      </header>

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
    </>
  );
};

export default GameOfLife;
