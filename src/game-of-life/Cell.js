const { CellState } = require("./CellState");

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
    console.log(this.neighbours);
    const liveNeighbours = this.neighbours.filter(
      (item) => item.currentState === CellState.Alive
    );

    let result = this.currentState;
    console.log(liveNeighbours);
    if (liveNeighbours.length === 3 && this.currentState === CellState.Dead) {
      result = CellState.Alive;
    }
    return result;
  }
}

module.exports = Cell;
