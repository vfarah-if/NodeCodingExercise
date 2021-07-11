import { EOL } from 'os';

import Cell from './cell';
import { CellState } from './CellState';

class GameOfLife {
  constructor(size, positions = Array()) {
    this.size = size;
    this.board = Array.from(Array(size), () => new Array(size));
    this.nextStates = Array.from(Array(size), () => new Array(size));
    this.initialiaseBoard();
    this.setupNeighbours();
    this.seed(positions);
  }

  initialiaseBoard() {
    this.boardPositions().forEach((position) => {
      const { x, y } = position;
      this.board[y][x] = new Cell();
    });
  }

  cell(x, y) {
    return this.board[y][x];
  }

  setupNeighbours() {
    this.boardPositions().forEach((position) => {
      const { x, y } = position;
      const neighbours = this.getNeighboursByPosition(x, y);
      //   console.debug('Neighbours', neighbours);
      this.cell(x, y).addNeighbours(neighbours);
    });
  }

  boardPositions() {
    const positions = new Array();
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        positions.push({ x, y });
      }
    }
    return positions;
  }

  getNeighboursByPosition(x, y) {
    const yRange = [y - 1, y, y + 1];
    const xRange = [x - 1, x, x + 1];
    const neighbours = Array();
    yRange.forEach((row) => {
      xRange.forEach((col) => {
        const isNotCentralCell = row !== y || col !== x;
        if (isNotCentralCell && this.isOnBoard(col, row)) {
          neighbours.push(this.board[row][col]);
        }
      });
    });
    return neighbours;
  }

  isOnBoard(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  seed(positions) {
    positions.forEach((position) => {
      const { x, y } = position;
      this.cell(x, y).currentState = CellState.Alive;
    });
  }

  generate() {
    this.getNextStates();
    this.transferNextStateToCurrentState();
  }

  transferNextStateToCurrentState() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        this.cell(x, y).currentState = this.nextStates[y][x];
      }
    }
  }

  getNextStates() {
    this.boardPositions().forEach((position) => {
      const { x, y } = position;
      this.nextStates[y][x] = this.cell(x, y).nextState();
    });
  }

  toString() {
    let result = '| ';
    for (let y = 0; y < this.size; y++) {
      if (y !== 0) result += `${EOL} | `;
      for (let x = 0; x < this.size; x++) {
        result += `${this.cell(x, y).toString()} | `;
      }
    }
    return result;
  }
}

export default GameOfLife;
