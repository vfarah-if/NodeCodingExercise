# Node Coding Exercise Template

This is a template to get up and running for interview tests or just setting up node plumbing for just prototyping ideas with Node. This makes the exercise of what you do more efficient. This has the possibility of getting out of date pretty quick so check references to make sure this is still current.

## References

This will archive a few things that help understand what was setup at the time. Projects go out of date pretty quickly so this will help understand what is still applicable.

At the time of setting this up I was using

1. _Node_ version **v14.15.1** and _NPM_ **6.14.8**

2. Using _Windows OS_ with an _Ubuntu_ developer kit installed on windows 10 - [See Ubuntu on Windows for more information](https://ubuntu.com/tutorials/ubuntu-on-windows#1-overview) which can be alternatively be done using Docker or other types of Virtual Machines. **NOTE**: Node is best served not on Windows when going to Production

3. Developing with _Visual Studio Code_ as an editor and like it as I use Visual Studio and other Microsoft Products that I find enrich developers experience. It is free and so that comes at a price. _Webstorm_ and some other paid products tend to give a richer more reliable experience, in my honest opinion, but as _VSCode_ matures, so does the experience

   3.1. Basic tutorials can be found [here](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) which can help you to get express up and running in no time

   3.2. _VSCode_ offers lots of plugins to speed up development

   3.3. _Typescript_ and typescript dev plugins really enrich the experience for code completion as well as finding 10% to 15% of bugs at compile time, which is always a bonus in this time driven game. If _Google_ and _Microsoft_ make it part of their suit, you know its something polished and enriching and [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) has been enriching my life since developing with _Borland_ technology, if any of you are old enough to remember _Turbo Pascal_ or _Delphi_

   3.4. Linters and Test Frameworks really keep the quality standardised, however they can be a little overwhelming and distracting with all the syntax highlighting distracting the though process. I love the outcome and the reason it exists but I struggle a bit with the noise it generates

   3.5 Install **Prettier** to make style more consistent with other team members

4. **Test-express** starter can be found in the root and check this [README](test-express/README.md) for more details

5. **Test-init** is all about having a clean slate to just do simple stuff, test or POC anything that does not need any prerequisite. Test express needed *Express* and a bunch of things in place before I could even begin to develop. Check [README](test-init/README.md) for a small amount of details

6. **[Test-init-babel](./test-init-babel)** is a simple node application for simply testing anything using the [EC6](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)+ syntax. Check [README](test-init-babel/README.md) for more information

7. As a developer who has worked mainly with `yarn` and `npm`, I thought I would skill up and use `pnpm` for a change. Why?

   - `pnpm` is fast and disk-efficient

   - What do I need to get it working?

     - Install the latest node using nvm

     - Install via `corepack` (Recommended for Node.js ≥16.13)

       ```bash
       ❯ corepack enable
       ❯ corepack prepare pnpm@latest --activate
       Preparing pnpm@latest for immediate activation...
       ❯ pnpm --version
       10.10.0
       ❯ node --v
       node: bad option: --v
       ❯ node -v
       v22.14.0
       ```
     
     - Initialise a new project using `pnpm`:
     
       ```bash
       mkdir test-pnpm && cd test-pnpm
       pnpm init
       ```
     
     - Install dev dependencies
     
       ```bash
       # Install jest and tyescript as this will always be my base from here on
       pnpm add -D jest ts-jest @types/jest typescript
       ```
     
     - Initialise the `ts-jest` config:
     
       ```
       ❯ npx ts-jest config:init
       ❯ pnpm add -D jest @types/jest
       ❯ npx jest --init
       ```
     
     - Create the sum kata to setup the environment ready to start:
     
       ```bash
       ❯ pnpm test
       ❯ pnpm watch
        PASS  sum/sum.test.ts
         sum
           ✓ should sum two numbers (1 ms)
           ✓ should sum two numbers with negative
           ✓ should sum two numbers with zero
           ✓ should sum two numbers with decimal
       
       Test Suites: 1 passed, 1 total
       Tests:       4 passed, 4 total
       Snapshots:   0 total
       Time:        0.554 s
       Ran all test suites.
       
       Watch Usage: Press w to show more.
       ```
     
     - Install ESLint and Prettier:
     
       ```bash
       ❯ pnpm add -D eslint prettier
       ```
     
     - Initialise ESLint for TypeScript:
     
       ```bash
       ❯ pnpx eslint --init
       ```
     
     - Add Prettier Compatibility:
     
       ```bash
       ❯ pnpm add -D eslint-config-prettier eslint-plugin-prettier
       ```
     
     - Format Prettier on save via vscode settings for the moment:
     
       ```json
       {
         "editor.defaultFormatter": "esbenp.prettier-vscode",
         "editor.formatOnSave": true
       }
       ```
     
       