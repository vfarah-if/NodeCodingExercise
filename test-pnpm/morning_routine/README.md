As a forgetful person, I need to remember my morning routine. Because of this, I have created a program that, depending on the time of day, will tell me what I should be doing:

```
From 06:00 to 06:59 - Do exercise
From 07:00 to 07:59 - Read and study
From 08:00 to 08:59 - Have breakfast
```

## Introduction

This kata could be done with two approaches:

- From scratch
- Refactoring the provided implementation

## Approach from scratch

### Story: Morning Routine Reminder

#### User Story:

`As a forgetful person,` `I want a program that reminds me of my morning routine,` `So that I can stay on track with my activities.`  

**Scenario 1**: Display "Do exercise" between 06:00 and 06:59 **(Done)**

`Given the current time is between 06:00 and 06:59` `When I request the routine activity` `Then the system should display "Do exercise"`  

**Scenario 2**: Display "Read and study" between 07:00 and 07:59 **(Done)**

`Given the current time is between 07:00 and 07:59` `When I request the routine activity` `Then the system should display "Read and study"` 

**Scenario 3**: Display "Have breakfast" between 08:00 and 08:59 **(Inprog)**

`Given the current time is between 08:00 and 08:59` `When I request the routine activity` `Then the system should display "Have breakfast"`  

**Scenario 4**: Display "No activity" outside the defined time range

```
Given the current time is before 05:59 or after 09:00
When I request the routine activity
Then the system should display "No activity"
```

## Iteration 2 - More precise time

Now I'd like to be able to add things to do, that take less than an Hour as well as update the list of things to do for example:

```
From 06:00 to 06:59 - Do exercise
From 07:00 to 07:29 - Read
From 07:30 to 07:59 - Study
From 08:00 to 08:59 - Have breakfast
From 06:00 to 06:44 - Do exercise
From 06:45 to 06:59 - Take a shower
From 07:00 to 07:29 - Read
From 07:30 to 07:59 - Study
From 08:00 to 09:00 - Have breakfast
```