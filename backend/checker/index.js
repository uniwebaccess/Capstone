const puppeteer = require('puppeteer');
const checkImgAlt = require('./checkImg');
const checkHeders = require('./checkHtag');


async function checkPage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let imgAltScore = await checkImgAlt(page);
  let headerScore = await checkHeders(page);

  await browser.close();

  return {
    score: 80,
    imgAltScore: imgAltScore,
    headerScore: headerScore
  }
}

async function checker(url) {
  let score = await checkPage(url);
  return score;
}

module.exports = checker;


//"https://en.wikipedia.org/wiki/Penguin"

