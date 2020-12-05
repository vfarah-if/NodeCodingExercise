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

# Assert Kata in Home

## Terms of the Exercise

- Try and stay away from libraries if possible
- You can take as long as you like to complete the exercise, but for an indicative timescale we expect a senior developer can accomplish this in an hour.
- You may use online resources to assist you with specific techniques, syntax etc. but please do not just copy code.
- Please don't share this exercise with any third party
- To submit your completed test, save here in jsbin and send us the new Url

## The Challenge

The aim of the exercise is to demonstrate your problem solving and understanding of JavaScript by implementing something found in every unit testing tool - an "assertEquals" method.

- Fill in the "assertEquals" function such that it will correctly compare the passed "expected" vs "actual" parameters.
- You may add more functions.
- We are big on TDD, so we expect you to complete this test using this approach.
- Credit will be given for approach, correctly identifying "failed" assertEquals, **clean, testable** code and coding style.
- The set of tests provided isn't exhaustive - there are cases that they don't handle. We expect you to add more tests.

## Expected Result

The following tests should "fail": **02, 03, 04, 07, 08 and 09** - and the failures should be reported using the provided mechanism.
We expect the following output for the lsit of tests we have provided, but we also expect you to add more tests:

- Test 02: Expected "abcdef" found "abc"
- Test 03: Expected type Array but found type Object
- Test 04: Expected array length 2 but found 3
- Test 07: Expected propB.propA[1].propB "b" but found "c"
- Test 08: Expected propB.propC but was not found
- Test 09: Expected type Null but found type Object

## Output



