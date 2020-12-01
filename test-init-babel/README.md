# Introduction

This is a really simple babel enhanced application that permits me to utilise ec6+ standards for ease of developing stuff using the latest JS patterns

- Copied the standard node application ... 

- **Install babel** minimum files to *transpile* node to EC6+ `npm i -D  @babel/core @babel/cli @babel/preset-env @babel/polyfill`

- **Configure package.json** for babel presets

  ```json
  "babel": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "usage",
            "corejs": 2
          }
        ]
      ]
    }
  ```

- Reconfigure package.json **scripts** to use the babel outputted results

  ```json
    "scripts": {
      "start": "npm-run-all build run",
      "start:debug": "npm-run-all build debug",
      "build": "npm-run-all clean transpile clean:tests clean:snapshots",
      "clean": "rimraf dist",
      "clean:tests": "rimraf dist/**/*.test.js",
      "clean:snapshots": "rimraf dist/**/__snapshots__/**",
      "debug": "node --inspect ./dist/index.js",
      "run": "node ./dist/index.js",
      "transpile": "babel ./src --out-dir dist --copy-files",
      "test": "jest src/*",
      "test:watch": "jest --watch src/*"
    },
  ```

- Ready to start doing katas or testing ideas using EC6+ syntax