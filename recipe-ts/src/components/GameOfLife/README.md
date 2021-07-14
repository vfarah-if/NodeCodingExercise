he universe of the Game of Life is an infinite, two-dimensional [orthogonal](https://en.wikipedia.org/wiki/Orthogonality) grid of square _cells_, each of which is in one of two possible states, _live_ or _dead_, (or _populated_ and _unpopulated_, respectively). Every cell interacts with its eight _[neighbours](https://en.wikipedia.org/wiki/Moore_neighborhood)_, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the **seed** of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a _tick_. Each generation is a _[pure function](https://en.wikipedia.org/wiki/Pure_function)_ of the preceding one. The rules continue to be applied repeatedly to create further generations.
