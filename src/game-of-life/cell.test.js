const Cell = require("./Cell");
const { CellState } = require("./CellState");

describe("cell", () => {
  test("should create by default as a dead cell", () => {
    const cell = new Cell();

    expect(cell.currentState).toBe(CellState.Dead);
    expect(cell.currentState === CellState.Dead).toBeTruthy();
  });
});
