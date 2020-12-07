# Introduction

The purpose of this Kata is to practise using the latest patterns to refresh skills and common mistakes I personally may make using patterns I learnt on the job or incorrectly from blogs or developers I may have incorrectly inherited from. The end game is to either be happy with the current skills I have or to adopt a new and better way of doing this

## Instructions

1. Follow instructions using these [testing environments](https://reactjs.org/docs/testing-environments.html)
    - Make sure you have the latest version of [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/)
    - `npx create-react-app recipe`
    - `npm init react-app recipe-npm`
    - `yarn create react-app recipe-yarn`
    
2. Follow these instructions using this [kata](https://reactjs.org/docs/testing-recipes.html)

3. Do the **typescript version** which is using a template which is `npx create-react-app recipe-ts --template cra-template-typescript`, [see other templates](https://www.npmjs.com/search?q=cra-template-*&page=0&perPage=20) for more examples

    - Make sure the latest typescript is installed `npm install -g typescript`

4. Optimise any routes with [code splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)

5. Always initiate project with [Storybooking](https://storybook.js.org/docs/react/get-started/install) to help with any development, style guides and UI in the future `npx sb init`

    - I had a an [issue](https://stackoverflow.com/questions/60964631/create-react-app-requires-a-dependency-babel-loader-8-1-0) which is usually solved reinstalling *yarn* or *npm* after deleting the node_modules folder - must be a windows thing

      ```json
      # .env file in root
      SKIP_PREFLIGHT_CHECK=true
      ```
    
6. Extend my default testing to use [storybooking with unit tests](https://storybook.js.org/docs/react/workflows/testing-with-storybook), integration tests or any other tests that could be added

## Summary

TODO: Summarise findings based on this experiment
