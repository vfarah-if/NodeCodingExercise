# Introduction

All sorts of Katas here

# Flashlight Kata

Super simple Kata - represent a **flashlight** as a finite state machine

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



