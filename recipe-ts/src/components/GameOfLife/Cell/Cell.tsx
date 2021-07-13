import React, { MouseEventHandler } from 'react';
import './style/index.css';

export interface CellProps {
  cellSize: number;
  cellBorderColor: string;
  cellBackgroundColor: string;
  onCellClick: MouseEventHandler;
}

const Cell: React.FC<CellProps> = ({
  onCellClick,
  cellSize = 40,
  cellBorderColor = 'blue',
  cellBackgroundColor = undefined,
}) => {
  return (
    <div
      className='cell'
      onClick={onCellClick}
      style={{
        width: cellSize,
        height: cellSize,
        border: `solid 2px ${cellBorderColor}`,
        backgroundColor: cellBackgroundColor,
      }}
    ></div>
  );
};

export default Cell;
