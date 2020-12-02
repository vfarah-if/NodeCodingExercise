

# Introduction

A **finite state machine** is an abstract machine that can have only a *fixed number of states*. That means it has a fixed number of inputs and a set of outputs. A keyword finite represents that it will have limited options and memory to play with.

1. One state is defined as the initials state
2. Each state can define actions that occur when a machines enters or exists that state
3. Actions will typically have side effects
4. Each state can define events that trigger a transition
5. A transition can define actions that occur when the transition happens and .3 will occur

When running a state machine, the first things that happens is it is executed entering an **initial state**. Then events are passed to the machine and as soon as that happens:

1. The event is checked against the **current state's transition** 
2. If the transition matches the event, the **transition occurs**
3. By virtue of the transition "happening", **states** are *exited* and *entered* and the relevant actions are performed
4. The machine is immediately in the **new state** and ready to process the *next event*

Super simple Kata - represent a **flashlight** as a finite state machine

## Summary

My initial solution was absolute drivel,  I even have it here to remind me of how easy it is to oversimplify things. ***Things I did wrong*** included:

1. I initially just wanted to TDD getting my torch to change into those states practising keyboard short-cuts, TDD mannerisms and conventions I don't usually practise when in the real world because I know how to drive the car and don't need to make it formal
2. Quick gratification sent me down the route of creating a class that represented my torch and adding a single method that would represent my action, having not defined if it should be functional or class oriented
3. I could now nicely flow tests that represented initial state and next state and got that happy feeling of red green that made me carry on down this over simplified route
4. Finally after finishing everything with an almighty horrible switch in a class that I thought would put me in a horrible light anyway, I refactored this into a one liner and was super happy to get rid of my switch
5. It was after that refactoring that alarm bells started ringing that I may have oversimplified a state machine and if it was this easy, redux would be loved for its simplicity
6. The other thing I made a mistake with, even though it is my first TODO item, I did not write down the real problem or details of what a state machine is and so was just oversimplifying stuff I assumed would be important, like the income outcome, like a self taught developer would. I blame **Occam's razor** for that ;)

What did I do to improve my predicament. I took a very simple article and  got the gist of what this should do. I pulled myself out of my comfort zone and found myself using the same patterns I thought were over elaborate with redux and now had a new found respect for why that existed. I must be honest I still found it hard to TDD this mainly because the pattern itself seems complicated and not easy to start simply.

1. Write down the problem
2. Choose a style of driving the solution, classist or functional
3. Role with changes as simple as possible when doing TDD