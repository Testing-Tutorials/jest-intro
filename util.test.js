const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 28);
  expect(text).toEqual("Max (28 years old)");
  const text2 = generateText("Anna", 28);
  expect(text2).toEqual("Anna (28 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("should output data-less text", () => {
  const text = generateText();
  expect(text).toBe("undefined (undefined years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)"); // or toEqual
});

test("should create element with name and age", async () => {
  var browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });

  var [page] = await browser.pages();

  await page.goto(
    "file:///Users/footios/development/Testing/js-testing-intro/index.html"
  );
  await page.click("input#name"); // not really needed, just type...
  await page.type("input#name", "Anna");
  await page.type("input#age", "28");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Anna (28 years old)");
}, 10000);
