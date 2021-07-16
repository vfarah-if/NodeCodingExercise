import React, { MouseEventHandler } from 'react';
import './style/index.css';

export interface CellProps {
  cellSize: number;
  cellBorderColor: string;
  cellBackgroundColor?: string;
  onCellClick: MouseEventHandler;
  displayText?: string;
  isActive?: boolean;
  cellActiveColor?: string;
}

const Cell: React.FC<CellProps> = ({
  onCellClick,
  cellSize = 40,
  cellBorderColor = 'gray',
  cellBackgroundColor,
  displayText,
  isActive = false,
  cellActiveColor = 'blue',
}) => {
  return (
    <div
      className={isActive ? 'cell active' : 'cell'}
      onClick={onCellClick}
      style={{
        width: cellSize,
        height: cellSize,
        border: `solid 1px ${cellBorderColor}`,
        backgroundColor: `${isActive ? cellActiveColor : cellBackgroundColor}`,
      }}
    >
      {displayText}
    </div>
  );
};

export default Cell;
