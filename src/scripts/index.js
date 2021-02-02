import puppeteer from 'puppeteer';
import checkHeders from './checkHtag';
import checkImgAlt from './checkImg'

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
  console.log(score);
}

export default main;

//"https://en.wikipedia.org/wiki/Penguin"
