const puppeteer = require("puppeteer");
const imagesCheck = require("./images");
const headingsCheck = require("./headings");
const globalCodeCheck = require("./globalCode");
const controlsCheck = require("./controls");
const structuralCheck = require("./structural");
async function checkPage(url) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(url);
  //add different tasks
  let imagesResult = await imagesCheck(page);
  let headingsResult = await headingsCheck(page);
  let globalCodeResult = await globalCodeCheck(page);
  let controlsResult = await controlsCheck(page);
  let structuralResult = await structuralCheck(page);

  await browser.close();

  // calculating algorithm :
  let percent =
    imagesResult.percent * 0.2 +
    headingsResult.percent * 0.15 +
    globalCodeResult.percent * 0.2 +
    structuralResult.percent * 0.25 +
    controlsResult.percent * 0.2;

  /*
    Weights:
      images: 25%
      headings: 15%
      globalcode: 20%
      access: 25%
      controls: 15%

    */

  percent = Math.round(percent * 100) / 100;

  const passed = percent > 70;

  return {
    score: { percent: percent, passed: passed },
    imagesResult,
    headingsResult,
    globalCodeResult,
    controlsResult,
    structuralResult,
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
