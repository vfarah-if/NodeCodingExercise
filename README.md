# Introduction

The purpose of this Kata is to practice using the latest patterns to refresh skills and common mistakes I personally may make using patterns I learnt on the job or incorrectly from blogs or developers I may have incorrectly inherited from. The end game is to either be happy with the current skills I have or to adopt a new and better way of doing this

## Instructions

1. Follow instructions using these [testing environments](https://reactjs.org/docs/testing-environments.html)
    - Make sure you have the latest version of [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/)
    - `npx create-react-app recipe`
    - `npm init react-app recipe-npm`
    - `yarn create react-app recipe-yarn`
    
2. Follow these instructions using this [kata](https://reactjs.org/docs/testing-recipes.html)

3. Do the **typescript version** which is using a template which is `npx create-react-app recipe-ts --template cra-template-typescript`, [see other templates](https://www.npmjs.com/search?q=cra-template-*&page=0&perPage=20) for more examples

    - Make sure the latest typescript is installed `npm install -g typescript`
    - Issue with react testing extensions can be fixed with this https://github.com/testing-library/react-testing-library/issues/36
      - `yarn add --dev @testing-library/react @testing-library/jest-dom` fixes the extension problem by bumping the version to the latest
    - 

5. Always initiate project with [Storybooking](https://storybook.js.org/docs/react/get-started/install) to help with any development, style guides and UI in the future `npx sb init`

    - I had a an [issue](https://stackoverflow.com/questions/60964631/create-react-app-requires-a-dependency-babel-loader-8-1-0) which is usually solved reinstalling *yarn* or *npm* after deleting the node_modules folder - must be a windows thing

      ```json
      # .env file in root
      SKIP_PREFLIGHT_CHECK=true
      ```
      
    - Here is issue https://github.com/storybookjs/storybook/issues/5183
    
      - Run `npx -p @storybook/cli sb init --type react`
    
      - Add in the packages under the dev section
    
        ```json
        "resolutions": {
          "/react-scripts//babel-loader": "^8.1.0"
        }
        ```
    
      - `yarn add -D --exact babel-loader@8.1.0`
    
6. Extend my default testing to use [storybooking with unit tests](https://storybook.js.org/docs/react/workflows/testing-with-storybook), integration tests or any other tests that could be added

7. Create server side components within next js

    - `npx create-next-app` and you can find more information [here](https://nextjs.org/docs/api-reference/create-next-app)	
    
8. Using **environment variables** through a Create React App worked different to what I expected because [this link](https://create-react-app.dev/docs/adding-custom-environment-variables/) exposed environment variables like so, yet this [issue link](https://stackoverflow.com/questions/53237293/react-evironment-variables-env-return-undefined) fixed my issue, meaning if you did not prefix any *env variables* with the **REACT_APP_** then nothing assigned to the config

9. [React testing library](https://testing-library.com/docs/react-testing-library/intro/), in amongst other libraries, can be found on the link and seems the simplest way to test several things about a component without using the latest

10. Common mistakes that are made with the react testing library can be [found here](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library), useful as I found myself making some of these mistakes as a natural inclination to test with previous bad habits

## Environment

Should always prepare an environment with tools to  help with verifying the integrity of what you are doing.

| Command                                               | Description                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| `npm run start` or `npm start`                        | Should *start the project* with the default production setup |
| `npm run build`                                       | Should *build the project* to a distribution folder ready to be released |
| `npm run test`                                        | Should allow all the *tests* configured in the project to run |
| `npm run coverage`                                    | Should run all the tests and output coverage reports for what has been tested |
| `npm run storybook`                                   | Should run the **storybook** on the configured port and URL to demonstrate and allow tinkering with. **Note** this is also an extension of the tests which should be configured to use the storybook scenarios to generate snapshots |
| `npm i` or `yarn`                                     | **Quick start** when installing                              |
| `yarn add` or `npm install --save-dev ` or `npm i -D` | Installing or adding components                              |



# **Amido Front End Technical Test**



**Using a framework of your choice (or no framework if you like) create a server-side-rendered application** that meets the following specification, using the following API:



https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1



**Spec:**

**As a user**

I want to be able perform a search query about an artist, album or song

So that I can see a list of artists, albums and/or songs related to my query



**Given I am using the search form**

When I conduct a search

Then I should be able to see the results returning matching Artists, Albums, and/or Songs

And it should limited to 10 items at a time

(optional) And when I scroll down, another 10 items should be revealed.



Given I am using the search form

When I conduct a search

And there are no results

Then I should be notified that there are no results



(optional)

Given I have a list of results

When I 'favourite' an artist, song or album

Then the favourited item should appear in another list (favourites section).



**Note:**

1. Presentation is secondary to the above but use of css-in-js is favored against legacy CSS frameworks, we are mainly interested to see how your markup is structured.
2. Use of TS is preferred over JS
3. You can use NextJS or simple SSR

## Summary

Was easy to setup and getting going. The storybook runs slowly on windows, 
