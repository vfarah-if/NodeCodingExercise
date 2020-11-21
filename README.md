# Node Coding Exercise Template
This is a template to get up and running for interview tests or just setting up node plumbing for just prototyping ideas with Node. This makes the exercise of what you do more efficient. This has the possibility of getting out of date pretty quick so check references to make sure this is still current.

## References

This will archive a few things that help understand what was setup at the time. Projects go out of date pretty quickly so this will help understand what is still applicable.

At the time of setting this up I was using

1. *Node* version **v14.15.1** and *NPM* **6.14.8**

2. Using *Windows OS* with an *Ubuntu* developer kit installed on windows 10 - [See Ubuntu on Windows for more information](https://ubuntu.com/tutorials/ubuntu-on-windows#1-overview) which can be alternatively be done using Docker or other types of Virtual Machines. **NOTE**: Node is best served not on Windows when going to Production

3. Developing with *Visual Studio Code* as an editor and like it as I use Visual Studio and other Microsoft Products that I find enrich developers experience. It is free and so that comes at a price. *Webstorm* and some other paid products tend to give a richer more reliable experience, in my honest opinion, but as *VSCode* matures, so does the experience
   
   3.1. Basic tutorials can be found [here](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) which can help you to get express up and running in no time

   3.2. *VSCode* offers lots of plugins to speed up development
   
   3.3. *Typescript* and typescript dev plugins really enrich the experience for code completion as well as finding 10% to 15% of bugs at compile time, which is always a bonus in this time driven game. If *Google* and *Microsoft* make it part of their suit, you know its something polished and enriching and [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) has been enriching my life since developing with *Borland* technology, if any of you are old enough to remember *Turbo Pascal* or *Delphi* 

   3.4. Linters and Test Frameworks really keep the quality standardised
   
4. Generating an express application with ES6 can be done very easily [following these instructions using babel](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/)

   `npx express-generator your-project-name --no-view`

   `Refactor some of the generated code into server folder`

   `Start removing the require to imports out of all units under generated folder`

   `npm install --save npm-run-all`

   `npm install --save @babel/core @babel/cli @babel/preset-env nodemon rimraf`

   Configure babel *package json*

   ```json
   // package.json
   {  
     // .. contents above
     "babel": {
       "presets": ["@babel/preset-env"]
     },
   }
   ```

   Configure scripts to *transpile*

   ```json
   // package.json
   "scripts": {
       "start": "node ./server/bin/www",
       "transpile": "babel ./server --out-dir dist-server"
   }
   
   ```

   Finally run `npm run transpile`

   ```json
   // package.json
   "build": "npm-run-all clean transpile"
   ```

   **NOTE:** Installed `npm install --save-dev cross-env` for any environment settings, only needed for windows

5. Automatically recompiling code when changes are made

   ```json
   // package.json
   ...
   "nodemonConfig": { 
     "exec": "npm run dev",
     "watch": ["server/*", "public/*"],
     "ignore": ["**/__tests__/**", "*.test.js", "*.spec.js"]
   },
   "scripts": { 
     // ... other scripts
     "watch:dev": "nodemon"
   }
   ```

6. Configuring *Jest Tests*

   ```json
   / package.json
   ...
   "jest": { 
     "testEnvironment": "node"
   },
   "scripts": {
     // ..other scripts 
     "test": "jest"
   }
   ```

7. **Jest documentation** can be found [here](https://jestjs.io/docs/en/getting-started)

