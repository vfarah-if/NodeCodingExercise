# Introduction

This code is dedicated to practicing and improving problem-solving skills by working on a variety of simple katas. The purpose is to reinforce fundamental programming concepts and techniques through repeated practice, helping to build confidence and proficiency in solving coding challenges.

This utilises pnpm and a very simplistic setup for practising TDD for formatting, watching and practising using typescript.

## Benefits of TDD

Test-Driven Development (TDD) offers several benefits, including:

- **Improved Code Quality**: Writing tests first ensures that the code meets the requirements and behaves as expected.
- **Faster Debugging**: Tests help identify issues early, reducing the time spent debugging.
- **Refactoring Confidence**: With a robust test suite, developers can refactor code without fear of introducing new bugs.
- **Better Design**: TDD encourages writing modular, maintainable, and well-structured code.
- **Documentation**: Tests serve as living documentation, making it easier to understand the code's purpose and behavior.

https://www.codurance.com/katas

## Sum Folder example
sum.should.test.ts: This file contains a very simple unit tests for the sum function. The sum folder demonstrates how to write clean, modular code and test it effectively using TDD. It serves as a foundational exercise for practicing problem-solving and testing techniques. It started it existance as `a+b` and ended up as a [reducer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), going from simple to complex. The entire life was spent always making sure it used to work, and then being extended by edge cases. This is way too simple for most but does show very simply how you can explore the katas above and communicate your intent in the most simplistic way. 

1. It starts with the folder name
2. Then describes what the tests **should/must/you choose** do
3. **Describe**s in the test that sum should ...
4. **Test** *two numbers sum* as the first smallest step to have a simple reason for the sum function to exist. Test fails as sum does not exist at this stage `red`
5. Create the sum function with the least amount of code and tests passes `green`
6. Refactor to make it cleaner and better `refactor`
7. Add edge cases for the same function and carry on ... `red, green, refactor * infinity`
8. Finally refactor tests and code and make it ellegant while being safe. This is iterative and keep in mind [Beck's design rules](https://martinfowler.com/bliki/BeckDesignRules.html):
   - Passes the test
   - Reveals intention
   - No duplication
   - Fewest elements

