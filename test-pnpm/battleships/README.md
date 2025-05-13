## Introduction

This version of the classic game has three ships:

- **Carrier**: 4 cells - represented on a board with 'c'
- **Destroyer**: 3 cells - represented on a board with 'd'
- **Gun Ship**: 1 cell - represented on a board with 'g'

Create a **program** that allows the user to specify **commands** for playing battleship. The commands available are:

- **addPlayer**: Creates a player for the game.
- **start**: Starts a new game with a fleet of ships placed at user's defined (x,y) coordinates.
- **endTurn**: Ends the player's turn.
- **print**: This command will print out the game board (Exhibit A):

```
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
   0|   |   |   |   |   |   |   |   |   |   |
   1|   |   |   |   |   |   |   |   |   |   |
   2|   |   |   |   |   |   |   | g |   |   |
   3|   |   | d | d | d |   |   |   |   |   |
   4|   |   |   |   |   |   | g |   | c |   |
   5|   |   |   |   |   |   |   |   | c |   |
   6|   |   |   |   |   |   |   |   | c |   |
   7|   | g |   |   |   | d |   |   | c |   |
   8|   |   |   |   |   | d |   |   |   |   |
   9|   |   |   |   |   | d |   |   |   | g |
```

- **fire**: Launches a torpedo at the given (x,y) coordinates.
  - If the (x,y) coordinate is sea then the position will be marked with 'o'.
  - If the (x,y) coordinate is a ship then the position will be marked with 'x'.
  - If a ship has all cells hit then a message should print notifying the player the ship has sunk.

### Rules

- When all ships have been sunk the game ends
- when the game is finished the game should display a battle report the number of shots fired by each player, including hit/miss ship sunk.
- Ships sunk should show the lowest possible coordinate for the given ship, for example:
  - A horizontal destroyer on grid reference (2,3), (3,3) and (4,3), but when reporting the sinking of the ship, you only need to reference the first coordinate.
  - A vertical destroyer on ref (5,5), (5,6) and (5,7) but you'll only need to reference (5,5) when reporting.

Using Exhibit A above, here is a battle report based on the ship positions:

```
[ Player1
 Total shots: 23
 Misses: 15
 Hits: 8
 Ships Sunk: [ 
	Gunship: (1,7),
	Gunship: (9,9),
	Gunship: (7, 2),
	Destroyer (2,3) ]
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
   0|   |   | o |   |   |   |   |   |   |   |
   1|   | o |   | o |   |   |   |   |   |   |
   2|   | o |   |   |   |   |   | X |   |   |
   3|   |   | X | X | X |   |   |   |   |   |
   4|   | o |   |   |   |   | g |   | c |   |
   5|   | o | o |   |   | o |   |   | c |   |
   6|   |   |   | o |   |   | o |   | c |   |
   7|   | X |   |   |   | d |   |   | x |   |
   8|   |   | o | o |   | d |   |   | o |   |
   9|   |   |   |   | o | x | o |   |   | X |
```

Sunk ships have all their coordinates marked with an uppercase X and hit cells have a lower case x where they were not sunk.

### Restrictions

- Complete using outside-in
- Each player has maximum:
  - 1 Carrier
  - 2 Destroyers
  - 4 Gunships
- Grid is 10 x 10 to keep it simple (but the design should be open for enhancements)

### Hardcore enhancement (optional)

- Implement an AI player



## Steps

###  **Phase 1 – Command interface scaffolding**

1. ✅ **Write a test that sends a user command: `"addPlayer Player1"`**
   - This drives creation of a `CommandHandler` or similar front-facing interface.
   - It will **stub** the underlying service responsible for storing/handling players.
2. 🔨 Add support for `"print"` (empty board) — proves infrastructure is in place.

------

### 🔹 **Phase 2 – Game setup**

1. ✅ Drive support for `"start"` with defined ship placements.
   - Define player’s board.
   - Validate ship placement rules (types, no overlap, within bounds).

------

### 🔹 **Phase 3 – Core gameplay mechanics**

1. ✅ Drive `"fire"` command.
   - Mark hits/misses.
   - Track per-player actions.
2. ✅ Implement `"endTurn"` with active player switching.

------

### 🔹 **Phase 4 – Game end logic**

1. ✅ Add sinking logic — track per-ship hit state.
2. ✅ Detect when all ships are sunk — end the game.
3. ✅ Generate a `"battle report"` with stats and sunk ship positions.

------

### 🔹 **Phase 5 – Output and polish**

1. ✅ Ensure the `print` command reflects in-progress state correctly.
2. ✅ Ship symbols (`x`, `o`, `X`) match game state expectations.