import { CellState } from './CellState';

export default class Cell {
  constructor(state = CellState.Dead) {
    this.currentState = state;
    this.neighbours = new Array();
  }

  addNeighbours(items) {
    items?.forEach((item) => {
      this.neighbours.push(item);
    });
  }

  aliveNeighbours() {
    return this.neighbours.filter(
      (neighbour) => neighbour.currentState === CellState.Alive
    );
  }

  nextState() {
    if (this.isFertile() || this.isThriving()) {
      return CellState.Alive;
    }

    if (this.isUnderpopulated() || this.isOverpopulated()) {
      return CellState.Dead;
    }

    return this.currentState;
  }

  isFertile() {
    return (
      this.currentState === CellState.Dead &&
      this.aliveNeighbours().length === 3
    );
  }

  isThriving() {
    return (
      this.currentState === CellState.Alive &&
      this.aliveNeighbours().length === 2
    );
  }

  isOverpopulated() {
    return this.aliveNeighbours().length > 3;
  }

  isUnderpopulated() {
    return this.aliveNeighbours().length < 2;
  }

  toString() {
    return this.currentState === CellState.Alive ? 'X' : ' ';
  }
}
