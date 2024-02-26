const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("click draw, display the div element with id = choices", async () => {
    // navigate to site page
    await driver.get("http://localhost:8000");

    // click the draw button
    const draw = await driver.findElement(By.id("draw"));
    await draw.click();

    // wait for choices div
    const choicesDiv = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDiv), 3000);

    // ensure that choices div is visible in the webpage
    const visibleChoicesDiv = await choicesDiv.isDisplayed();
    expect(visibleChoicesDiv).toBe(true);
  });

  test("check that clicking add to Duo, displays div = \"player-duo\"", async () => {
    //  navigate to site page
    await driver.get("http://localhost:8000");

    // draw cards
    const draw = await driver.findElement(By.id("draw"));
    await draw.click();

    // add to duo
    // click first occurence of add to duo 
    const addToDuo = await driver.findElement(By.className("bot-btn"));
    await addToDuo.click();

    // wait for player-duo div
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 3000);

    // ensure the player duo div is visible
    const visiblePlayerDuo = await playerDuoDiv.isDisplayed();
    expect(visiblePlayerDuo).toBe(true);
  });
});