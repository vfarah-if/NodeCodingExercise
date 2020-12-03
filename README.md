# Introduction

All sorts of Katas here

## Roman Numeral Kata

| I    | 1    | XI    | 11   |
| ---- | ---- | ----- | ---- |
| II   | 2    | XII   | 12   |
| III  | 3    | XIII  | 13   |
| IV   | 4    | XIV   | 14   |
| V    | 5    | XV    | 15   |
| VI   | 6    | XVI   | 16   |
| VII  | 7    | XVII  | 17   |
| VIII | 8    | XVIII | 18   |
| IX   | 9    | XIX   | 19   |
| X    | 10   | XX    | 20   |

| XXX  | 30   | CL   | 150  |
| ---- | ---- | ---- | ---- |
| XL   | 40   | CLIX | 159  |
| XLIX | 49   | CXC  | 190  |
| L    | 50   | CC   | 200  |
| LX   | 60   | CCC  | 300  |
| LXX  | 70   | CD   | 400  |
| LXXX | 80   | D    | 500  |
| XC   | 90   | DC   | 600  |
| XCIX | 99   | CM   | 900  |
| C    | 100  | M    | 1000 |

## Turnstile Kata

Build a finite state machine from scratch, that replicates the following Finite State Machine for a turnstile. There are 2 states it can be in, locked or unlocked. The default state is locked

-   **locked** (default state)
    -   The **light** should be on
    -   The **alarm** should be on
-   **unlocked**
    -   The **light** should be off
    -   The **alarm** should be off

The **locked** state should transition into unlocked when the _insertCoin_ action is dispatched

The **unlocked** state should transition back to locked when the _noEntry_ action is dispatched



