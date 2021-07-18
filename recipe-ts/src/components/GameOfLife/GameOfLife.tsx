import produce from 'immer';
import React, { useCallback, useEffect, useState } from 'react';
import Cell from './Cell';
import Commandbar from './Commandbar';
import './style/index.css';

type ButtonCallbackType = () => void;
type BoardCallbackType = (x: number, y: number) => boolean;
type BoardPositionCallbackType = () => Array<Position>;

export interface Position {
  x: number;
  y: number;
}
export interface GameOfLifeProps {
  boardSize?: number;
  cellSize?: number;
  gridColor?: string;
  activeColor?: string;
  seedActivePositions?: Array<Position>;
  showCellInfo?: boolean;
  backgroundColor?: string;
}

const GameOfLife: React.FC<GameOfLifeProps> = ({
  boardSize = 10,
  cellSize = 40,
  gridColor = 'gray',
  activeColor = 'blue',
  seedActivePositions = [],
  showCellInfo = false,
  backgroundColor = 'white',
}) => {
  const [board, setBoard] = useState(
    Array.from(Array(boardSize), () =>
      Array.from(Array(boardSize), () => false)
    )
  );
  const [isRunning, setIsRunning] = useState(false);

  const isOnBoard = useCallback<BoardCallbackType>(
    (x: number, y: number): boolean => {
      return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
    },
    [boardSize]
  );

  const boardPositions = useCallback<BoardPositionCallbackType>(() => {
    const result = new Array<Position>();
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        result.push({ x, y });
      }
    }
    return result;
  }, [boardSize]);

  useEffect(() => {
    if (seedActivePositions && seedActivePositions.length > 0) {
      const modifiedBoard = produce(board, (boardWithNewState) => {
        seedActivePositions.forEach((position) => {
          if (isOnBoard(position.x, position.y)) {
            return (boardWithNewState[position.y][
              position.x
            ] = !boardWithNewState[position.y][position.x]);
          }
        });
      });

      setBoard(modifiedBoard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seedActivePositions]);

  const handleCellClick = (x: number, y: number): void => {
    const modifiedBoard = produce(board, (boardWithNewState) => {
      boardWithNewState[y][x] = !boardWithNewState[y][x];
    });
    setBoard(modifiedBoard);
  };

  const randomise = useCallback<ButtonCallbackType>(() => {
    setBoard((currentBoard) => {
      return produce(currentBoard, (newBoard) => {
        boardPositions().forEach(
          ({ x, y }) => (newBoard[y][x] = Math.random() > 0.5 ? false : true)
        );
      });
    });
  }, [boardPositions]);

  const generate = useCallback<ButtonCallbackType>(() => {
    const getNeighboursByPosition = (x: number, y: number): Array<boolean> => {
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

    setBoard((currentBoard) => {
      return produce(currentBoard, (newBoard) => {
        boardPositions().forEach(({ x, y }) => {
          const neighbours = getNeighboursByPosition(x, y);
          const liveNeighbours = neighbours.filter((item) => item === true);
          const isAlive = board[y][x];
          const isFertile = () => !isAlive && liveNeighbours.length === 3;
          const isThriving = () => isAlive && liveNeighbours.length === 2;
          const isOverPopulated = () => liveNeighbours.length > 3;
          const isUnderPopulated = () => liveNeighbours.length < 2;

          if (isFertile() || isThriving()) {
            newBoard[y][x] = true;
          } else if (isOverPopulated() || isUnderPopulated()) {
            newBoard[y][x] = false;
          }
        });
      });
    });
  }, [board, isOnBoard, boardPositions]);

  const clear = useCallback<ButtonCallbackType>((): void => {
    setBoard((currentBoard) => {
      return produce(currentBoard, (newBoard) => {
        boardPositions().forEach(({ x, y }) => (newBoard[y][x] = false));
      });
    });
  }, [boardPositions]);

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
      <Commandbar
        simulateDisplay={isRunning ? 'Stop Simulation' : 'Start Simulation'}
        onClear={clear}
        onGenerate={generate}
        onSimulate={simulate}
        onRandomise={randomise}
      ></Commandbar>
      <div
        className='grid'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, ${cellSize}px)`,
        }}
      >
        {board.map((columns, y) =>
          columns.map((rows, x) => (
            <Cell
              key={`[${y},${x}]`}
              onCellClick={() => handleCellClick(x, y)}
              cellSize={cellSize}
              cellBorderColor={gridColor}
              cellBackgroundColor={backgroundColor}
              cellActiveColor={activeColor}
              displayText={showCellInfo ? `[${x}, ${y}]` : undefined}
              isActive={board[y][x]}
            ></Cell>
          ))
        )}
      </div>
    </>
  );
};

export default GameOfLife;
