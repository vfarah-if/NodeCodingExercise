import React, { MouseEventHandler } from 'react';
import './style/index.css';

export interface CellProps {
  cellSize: number;
  cellBorderColor: string;
  cellBackgroundColor?: string;
  onCellClick: MouseEventHandler;
  displayText?: string;
}

const Cell: React.FC<CellProps> = ({
  onCellClick,
  cellSize = 40,
  cellBorderColor = 'blue',
  cellBackgroundColor,
  displayText,
}) => {
  return (
    <div
      className='cell'
      onClick={onCellClick}
      style={{
        width: cellSize,
        height: cellSize,
        border: `solid 1px ${cellBorderColor}`,
        backgroundColor: cellBackgroundColor,
      }}
    >
      {displayText}
    </div>
  );
};

export default Cell;
