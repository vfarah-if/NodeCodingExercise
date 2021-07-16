import React, { MouseEventHandler } from 'react';
import './style/index.css';

export interface CellProps {
  cellSize?: number;
  cellBorderColor?: string;
  cellBackgroundColor?: string;
  cellActiveColor?: string;
  displayText?: string;
  isActive?: boolean;

  onCellClick?: MouseEventHandler;
}

const Cell: React.FC<CellProps> = ({
  cellSize = 40,
  cellBorderColor = 'gray',
  cellBackgroundColor,
  cellActiveColor = 'blue',
  displayText,
  isActive = false,
  onCellClick,
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
