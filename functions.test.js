const axios = require("axios");
const functions = require("./functions");

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// We run these functions before and after each test.
// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database CLosed...");

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Without using the functions file.

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600); // .toBeLessThanOrEqual
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham1");
//   });
// });

/* 
Lavish Jain
1 year ago
When testing asynchronous code using async/await, 
you don't need the expect.assertions() line. */

// Async Await
// test("User fetched name should be Leanne Graham", async () => {
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });

// Using the single argument: 'done'
test("User fetched name should be Leanne Graham", (done) => {
  functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
    done();
  });
});
