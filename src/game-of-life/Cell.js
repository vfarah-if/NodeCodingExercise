const { CellState } = require("./CellState");

class Cell {
  constructor(state = CellState.Dead) {
    this.currentState = state;
  }
}

module.exports = Cell;
