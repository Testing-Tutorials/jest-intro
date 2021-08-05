## [JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests](https://www.youtube.com/watch?v=r9HdJ8P6GQI)

JavaScript testing:

- unit tests,
- integration tests and
- e2e (UI) tests

can be intimidating. It shouldn't be! This video guides you through all the basics (including the "Why"?) of JavaScript testing. Master JavaScript testing now!

- Master JavaScript: https://acad.link/js
- Master ES6: https://acad.link/es6

NOTE: The repo of this tutorial has 6 remote branches:

- origin/HEAD -> origin/master
- origin/async-code
- origin/e2e-test
- origin/integration-test
- origin/master
- origin/starting-setup
- origin/unit-tests

In order to follow the second part [JavaScript Testing - Mocking Async Code](https://www.youtube.com/watch?v=4Fl5GH4eYZ8&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&index=2) you need to `git checkout async-code`

## 1. Benefits of automate testing:

- Get an error if you break code.
- Save time.
- Think about possible issues & bugs.
- Integrate into build workflow. This is more advanced! We could e.g. have a workflow, where we push a commit to github and then you have an automated workflow that is triggered and this code is then tested, in the cloud to some server. And if the test succeeds, it then gets deployed automatically.
- Break up complex dependencies. We have to write code that is modular, which makes testing easier, and ultimately we'll work with our code easier.
- Improves our code.

## 2. Kinds of tests:

- `Unit Tests`: Fully isolated (e.g testing a function).
  - Complexity: not match.
  - Frequency: write thousands of these.
- `Integration Tests`: With dependencies - not fully isolated (e.g. testing a function that calls a function).
  - Complexity: some.
  - Frequency: write thousands of these
- `End-to-End (E2E) or UI Tests`: Full Flow (e.g. validating the DOM after a click).
  - Complexity: more.
  - Frequency: write a few of these.

## 3. Testing Setup - tools we need.

- `Test Runner`: Executes our tests, summarize results and gives us some output of the results.
  - Kind of tests: Unit and Integration.
  - Tool: `Mocha`, `Jest`.
- `Assertion Library`: Define the logic and the conditions of our tests.
  - Kind of tests: Unit and Integration.
  - Tool: `Chai`, `Jest`.
- `Headless Browser`: Simulates browser integration.

  - Kind of tests: e2e.
  - Tool: `Puppeteer`, which is a headles version of Chrome.

- Syntax that is supported from Jest is `common node.js exports`. There is a way to make it work also with ES6 modules, but there you need a more complex workflow, extra packages etc.

- Unit Tests:
  We may write multiple Unit - Tests, for one and the same thing. And we may check for more than just one thing. And also check for false, true, or opposites.
