const { CellState } = require('./CellState');

class Cell {
  constructor(state = CellState.Dead) {
    this.currentState = state;
    this.neighbours = new Array();
  }

  addNeighbours(items) {
    items?.forEach((item) => {
      this.neighbours.push(item);
    });
  }

  nextState() {
    const liveNeighbours = this.neighbours.filter(
      (neighbour) => neighbour.currentState === CellState.Alive
    );

    if (this.isFertile(liveNeighbours) || this.isThriving(liveNeighbours)) {
      return CellState.Alive;
    }

    if (
      this.isUnderpopulated(liveNeighbours) ||
      this.isOverpopulated(liveNeighbours)
    ) {
      return CellState.Dead;
    }

    return this.currentState;
  }

  isFertile(liveNeighbours) {
    return this.currentState === CellState.Dead && liveNeighbours.length === 3;
  }

  isThriving(liveNeighbours) {
    return this.currentState === CellState.Alive && liveNeighbours.length === 2;
  }

  isOverpopulated(liveNeighbours) {
    return liveNeighbours.length > 3;
  }

  isUnderpopulated(liveNeighbours) {
    return liveNeighbours.length < 2;
  }

  toString() {
    return this.currentState === CellState.Alive ? 'X' : ' ';
  }
}

module.exports = Cell;
