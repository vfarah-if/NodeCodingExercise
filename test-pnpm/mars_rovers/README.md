## Instructions

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their onboard cameras can get a complete view of the surrounding terrain to send back to Earth.

Your task is to develop an API that moves the rovers around on the plateau.

In this API, the plateau is represented as a 10x10 grid, and a rover has state consisting of two parts:

- its position on the grid (represented by an X,Y coordinate pair)
- the compass direction it's facing (represented by a letter, one of `N`, `S`, `E`, `W`)

### Input

The input to the program is a string of one-character move commands:

- `L` and `R` rotate the direction the rover is facing
- `M` moves the rover one grid square forward in the direction it is currently facing

If a rover reaches the end of the plateau, it wraps around the end of the grid.

### Output

The program's output is the final position of the rover after all the move commands have been executed. The position is represented as a coordinate pair and a direction, joined by colons to form a string. For example: a rover whose position is `2:3:W` is at square (2,3), facing west.

### Obstacles

The grid may have obstacles. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle by prefixing `O:` to the position string that it returns. For instance, `O:1:1:N` would mean that the rover encountered an obstacle at position (1, 2).

### Examples

- given a grid with no obstacles, input `MMRMMLM` gives output `2:3:N`
- given a grid with no obstacles, input `MMMMMMMMMM` gives output `0:0:N` (due to wrap-around)
- given a grid with an obstacle at (0, 3), input `MMMM` gives output `O:0:2:N`

### Interface

There are no restrictions on the design of the public interface. In particular, much of the details of the obstacle feature's implementation are up to you.

Rules:

- The rover receives a char array of commands e.g. `RMMLM` and returns the finishing point after the moves e.g. `2:1:N`
- The rover wraps around if it reaches the end of the grid.

Credit: [Google Code Archive](https://code.google.com/archive/p/marsrovertechchallenge/)

Credit: [Google Code Archive](https://code.google.com/archive/p/marsrovertechchallenge/)

## Useful Links

### Books

- [Head First Design Patterns](https://www.oreilly.com/library/view/head-first-design/0596007124/) by Eric Freeman et al.
- [Understanding the Four Rules of Simple Design](https://leanpub.com/4rulesofsimpledesign) by Corey Haines

### Articles

- [Mars Rover Kata: Refactoring to Patterns](https://codurance.com/2019/01/22/mars-rover-kata-refactoring-to-patterns/) by [Simion Iulian Belea](https://codurance.com/publications/author/simion-iulian-belea/)

### Solutions

- [Java](https://github.com/sandromancuso/mars-rover-screencast/tree/screencast) by[ Sandro Mancuso](https://www.codurance.com/publications/author/sandro-mancuso) 

## Steps

Certainly, Vincent. Here's a well-structured summary of steps to break down the Mars Rover kata into focused, testable iterations using outside-in TDD. This progression balances incremental delivery, testability, and clean design principles:

------

## ✅ Step-by-Step Breakdown for the Mars Rover Kata (TypeScript)

### 🧭 **1. Define the Domain Types and Enums**

- **Purpose**: Model the rover’s state and commands.
- **Entities**:
  - `Direction` enum or type union: `'N' | 'E' | 'S' | 'W'`
  - `Position` type: `{ x: number; y: number }`
  - `Command` type: `'L' | 'R' | 'M'`

✅ Write unit tests for parsing and wrapping directions if you prefer utility functions early.

------

### 🧱 **2. Implement the `Grid`**

- **Responsibility**: Represent a 10x10 plateau, handle wrap-around logic, and detect obstacles.
- **Features**:
  - `wrap(position: Position): Position`
  - `hasObstacle(position: Position): boolean`

✅ Unit tests:

- `wrap({x:10,y:0}) => {x:0,y:0}`
- `hasObstacle({x:0,y:3}) => true`

------

### 🚙 **3. Create the `MarsRover` Class Skeleton**

- **Initial state**: Position at (0, 0), facing North

✅ Unit test:

- `new MarsRover(grid).execute('') => '0:0:N'`

------

### 🔁 **4. Implement Turning Logic**

- `L` and `R` commands modify direction
- Use direction index rotation: N → E → S → W → N

✅ Unit tests:

- `'L' from N => W`
- `'R' from N => E`

------

### ➡️ **5. Implement Forward Movement (`M`)**

- Move one step in the direction facing
- Use `Grid.wrap()` to handle edge crossing

✅ Unit tests:

- `execute('M')` updates position to `0:1:N`
- `execute('MMMMMMMMMM')` wraps to `0:0:N`

------

### ⛰️ **6. Add Obstacle Handling**

- Prevent movement into an obstacle
- Prefix output with `O:` and report last safe position

✅ Unit tests:

- Obstacle at `0:3`, `execute('MMMM') => O:0:2:N`

------

### 🧪 **7. Full Behavioural Tests**

Add scenario-based tests:

- `MMRMMLM => 2:3:N`
- `MMMMMMMMMM => 0:0:N`
- `MMMM` with obstacle at `0:3 => O:0:2:N`

------

### 🧼 **8. Refactor & Polish**

- Extract reusable logic (e.g. `rotate`, `nextPosition`)
- Add immutability if you favour a purer style
- Optionally expose state inspection for diagnostics/logging

