# Stats Service

## Problem

Our learning platform needs to track a **user's stats** for a particular **course**. We do this using a stats service.

The task is to create a simplified version of this service. Your stats service needs to provide the capability to create new stats as well as updating stats. The stats managed by the service are created and updated via HTTP calls. Stats are posted on the completion of a *learning session* and reflect how the *user did* on the learning session.

The service interface it defined in the form of a **swagger**.

## Requirements

- *Stats* are posted based on the **completion of a learning session**.
- Stats can be fetched via an *aggregated call* which **aggregates a users stat history** for a course they are studying.
- Stats should also be fetchable for a **single learning session**.
- The service must be easily runnable/startable & deployable on the
  AWS ecosystem by the reviewer of the task. Other than node.js being the main language, any technology can be
  used.
- The project should be submitted in the form of a **code repository**.
- Please state any assumptions or deviations from the specification in the repository readme.
- Stats should be persisted using a **database** of your choosing
- Your service should have some level of **tests**

## A little elaboration of the terminology we use to garner a bit more context:

**Course** - refers to a course on a particular subject that a user is learning. A course is made up of learning sessions.

**Session** - refers to a learning session that a user studies. Sessions are made up of modules that display content.

**Modules** - display content to the user. There are *15 module types* and these are
used depending on the type of content that is being displayed.

# Environment

Basic instructions to start build and get this API up and running

| package command      | description                                                  |
| :------------------- | :----------------------------------------------------------- |
| `npm i`              | **Install** all the packages                                 |
| `npm start`          | Runs and builds the application with **production** configuration |
| `npm run start:dev`  | Runs and builds the application with **development** configuration |
| `npm run watch:dev`  | Runs **dev** with ability to rebuild the application when any files change |
| `npm run build`      | **Builds the project**, cleaning the project, transpiling it and then cleaning the *transpiled* tests |
| `npm run test`       | Runs all the **tests once**                                  |
| `npm run test:watch` | Runs test in **test-development** mode while the developer creates tests giving the ability to automatically run when changes made |
