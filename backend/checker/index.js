const puppeteer = require("puppeteer");
const imagesCheck = require("./images");
const headingsCheck = require("./headings");
const globalCodeCheck = require("./globalCode");
const controlsCheck = require("./controls");

async function checkPage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //add different tasks
  let imagesResult = await imagesCheck(page);
  let headingsResult = await headingsCheck(page);
  let globalCodeResult = await globalCodeCheck(page);
  let controlsResult = await controlsCheck(page);

  await browser.close();

  return {
    score: { percent: 100, passed: 0 },
    imagesResult,
    headingsResult,
    globalCodeResult,
    controlsResult,
  };
}

async function checker(url) {
  let score = await checkPage(url);
  return score;
}

module.exports = checker;

//"https://en.wikipedia.org/wiki/Penguin"

//LINK FOR DOCUMENTATION:
//https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-class-page
