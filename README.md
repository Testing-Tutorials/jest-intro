### Important note:\

This repo has 2 parts and 3 branches

### [JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests](https://www.youtube.com/watch?v=r9HdJ8P6GQI)

Testing can be intimidating. It shouldn't be! This video guides you through all the basics (including the "Why"?) of JavaScript testing. Master JavaScript testing now!

- Master JavaScript: https://acad.link/js
- Master ES6: https://acad.link/es6

Ofcourse you can check this Academind article too: [JavaScript Testing Introduction](https://academind.com/tutorials/javascript-testing-introduction)

#### Why Test?

- Get an error if you break code
- Save time
- Think about possible issues and bugs
- Integrate into build workflow
- Break up complex dependencies (split code and make it modulars)
- Improve code

#### Different Kinds of Tests

- Unit tests (Fully isolated (e.g. testing one function))
- Integration tests (With dependencies (e.g. a function that calls another function - but not calling backend))
- End-to-End, E2E or UI tests (Full Flow (e.g. validating the DOM after a click))

Complexity: Unit -> Integration -> E2E
Frequency: the above reversed.

#### Testing Setup

- Test Runner (Executes your tests summarize results, e.g. Mocka, Jest)
- Assertion Library (Define testing logic, conditions, e.g. Chai, Jest)
- Headless Browser (Simulates browser interaction e.g. Puppeteer)

#### Extra Notes

- File names for running tests should end with `.spec.js` or `.test.js` and Jest will automatically detect them.
- puppeteer is a headless version of chrome.

===========================================================

### Second Video Mocking Async Code.

In order to follow the second part [JavaScript Testing - Mocking Async Code](https://www.youtube.com/watch?v=4Fl5GH4eYZ8&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&index=2) you need to `git checkout async-code`

#### 1. Benefits of automate testing:

- Get an error if you break code.
- Save time.
- Think about possible issues & bugs.
- Integrate into build workflow.
  - This is more advanced! We could e.g. have a workflow, where we push a commit to github and then you have an automated workflow that is triggered and this code is then tested, in the cloud to some server. And if the test succeeds, it then gets deployed automatically.
- Break up complex dependencies.
  - We have to write code that is modular, which makes testing easier, and ultimately we'll work with our code easier.
- Improves our code.

## 2. There are 3 Kinds of tests:

1. `Unit Tests`: Fully isolated (e.g testing a function).

- Complexity: not match.
- Frequency: write thousands of these.

2. `Integration Tests`: With dependencies - not fully isolated (e.g. testing a function that calls a function).

- Complexity: some.
- Frequency: write thousands of these

3. `End-to-End (E2E) or UI Tests`: Full Flow (e.g. validating the DOM after a click).

- Complexity: more.
- Frequency: write a few of these.

### 3. Testing Setup - tools we need.

1. `Test Runner`: Executes our tests, summarize results and gives us some output of the results.

- Kind of tests: Unit and Integration.
- Tools: `Mocha`, `Jest`.

2. `Assertion Library`: Define the logic and the conditions of our tests.

- Kind of tests: Unit and Integration.
- Tools: `Chai`, `Jest`.

3. `Headless Browser`: Simulates browser integration.

- Kind of tests: e2e.
- Tools: `Puppeteer`, which is a headless version of Chrome.

- Syntax that is supported from Jest is `common node.js exports`. There is a way to make it work also with ES6 modules, but you need a more complex workflow, extra packages etc.

- Unit Tests:
  We may write multiple Unit - Tests, for one and the same thing. And we may check for more than just one thing. And also check for false, true, or opposites.

Note: To check [JavaScript Testing - Mocking Async Code](https://www.youtube.com/watch?v=4Fl5GH4eYZ8) you need to `git checkout async-code`

//////////////////////////////////////////////////////////////

## PART TWO

Notes:

1. To check part two, you need to `git checkout second-part`
2. The code of part two is from the course from just the `Jest Crash Course - Unit Testing in JavaScript` course.

### [Jest Crash Course - Unit Testing in JavaScript](https://www.youtube.com/watch?v=7r4xVDI2vho) by Traversy Media

- First run `npm init -y` to get a `package.json`. Note: with the `-y` flag we skip the defaults.
- Then `npm i -D jest` to install jest locally as a dev dependency. Or install it globally.
- Change `"test": "echo \"Error: no test specified\" && exit 1"` to just `"test": "jest"` in package.json
- `.toBe` is for premitive types. To test objects use `.toEqual` or `.toStrictEqual`.
- scripts options:

```js
  "scripts": {
    "test": "jest  --verbose", // "test": "jest --coverage"
    "testwatch": "jest --watchAll"
  },
```

Note: From the following tutorial, we don't have any code in the files, but only the following notes.

### [Testing JavaScript with Jest](https://egghead.io/lessons/javascript-test-javascript-with-jest) by Kent C. Dodds

2. Test JavaScript with Jest.

Convencions to follow for test files:

- `fileName.test.js`
- `fileName.spec.js`
- Put all your test files in a folder with underscores, like `__folderName__`
- You can run your tests even with `npm t`
- Jest can simulate a browser enviroment. In order to avoid getting the `window` object, when running tests (because of the extra weight), we can configure the test enviroment for Jest in `package.json`. Just set the following:
  ```js
    "jest": {
      testEnvironment: "node"
    }
  ```

4. Track project code coverage with Jest.

- Specify the scripts in package.json to `"test": "jest --coverage"`. Then when we run `npm t`, we see a coverage report on the console. Plus we get a coverage folder in our project. There is an `index.js` file, which we can open, also through the cli by typing: `open coverage/Icov-report/index.html`. Or just got to file and open with right-click => `lite-server`. There you get a better overview...
- To add all the functions and files (you want to cover in your tests) automatically. Go to package.json and specify the glob `"src/*.js"`:

```js
"jest": {
  "collectCoverageFrom": [
    "src/*.js"
    ]
}
```

Notes: 1. The test files are excluded! 2. Add the coverage folder in your `.gitignore` file.

- We can configure jest with a coverage threshold. This means that if our code coverage ever passes below, that percentage, our testscript is going to fail. In this way, we encourage everybody to add tests as they add code. To do that add the threshold in the jest configuration. Note: the numbers below is the percentage.

```js
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
}
```

- Use Jest's interactive Watch Mode.
- Add in package.json, scripts the `--watch` flag like so: `"test": "jest --watch"`.
- To see just the last commit, add also the `--lastCommit` flag like so: `"test": "jest --watch --lastCommit"`
- You may specify a unique command like so:
  - `"test:watch": "jest --watch"` or
  - `"test:watchall": "jest --watchAll"`.
- To run tests only for a specified file. Press `p` and the name of the file.

6. Use Jest's SnapShot Testing Feature
7. Use Test Driven Development

From the following tutorial we only followed the 1st video

### [React-native jest tutorial](https://www.youtube.com/watch?v=pz2k6azJghk&list=PL8p2I9GklV46mGMh5X1pzuDWidnRrlHyp)

- If npm test does not run, put in `package.json`

```js
"scripts": {

   "test": "jest"
 },
"jest": {
   "preset": "react-native"
 },
```

- then install jest globally with `npm install -g jest`
- And for some reason I had to also `yarn add react-test-renderer`

1. Snapshot testing

- To update the snapshot run `jest --updateSnapshot` or `npm test -- -u`, or just `u`.

In the React Native app we just use the snap shot:

```js
// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 10, fontSize: 25 }}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// __tests__/App.js
import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// it("renders correctly", () => {
//   renderer.create(<App />);
// });

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

- If you run `jest` without updating the component, it passes. If you upadate it, it fails. Then you either fix the mistakes, or you run `jest -u` to update the snapshot, and it passes.
