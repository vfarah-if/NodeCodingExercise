# `Introduction

This is a skeleton Node Application generated basically for testing express API ideas. I find myself doing similar things over and over and this will be good for coding exercises and other types of base Express Ideas. I try to incorporate some testing ideas that can make testing easier or something I can learn and then incorporate onto my quick express application.

This document is to help map out some of my thoughts when I generated this and hopefully it wont go out of date too soon.

## Template Generation Steps

1. I generated a base express application using `npx express-generator your-project-name --no-view`

2. Generating an express application with ES6 can be done very easily [following these instructions using babel](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/)

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

3. Automatically recompiling code when changes are made

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

4. Configuring *Jest Tests*

   ```json
   // package.json
   ...
   "jest": { 
     "testEnvironment": "node"
   },
   "scripts": {
     // ..other scripts 
     "test": "jest"
   }
   ```

5. **Jest documentation** can be found [here](https://jestjs.io/docs/en/getting-started)

6. Struggled with Jest Test VSCode code completion and so decided to install the Typescript Types to help improve matters. On doing so nothing improved. Then googled and found adding jsconfig.json with this value improved things massively.

   ```json
   // jsconfig.json
   { "typeAcquisition": { "include": [ "jest" ] } }		
   ```

7. After looking at some latest testing patterns for Jest with Express, came across a technique I personally never used this and thought I would give it a go. The details can be found [here](https://www.codementor.io/@knownasilya/testing-express-apis-with-supertest-du107mcv2)

8. 