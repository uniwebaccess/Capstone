const puppeteer = require ('puppeteer');
const checkHeders = require ('./checkHtag');
const checkImgAlt = require ('./checkImg');

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

async function main(url) {
  let score = await checkPage(url);
  return score;
}

export default main;

//"https://en.wikipedia.org/wiki/Penguin"
