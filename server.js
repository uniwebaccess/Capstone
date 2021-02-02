const express = require ('express');
const puppeteer = require ('puppeteer');
const morgan = require('morgan');
const path = require('path');


const app = express()

app.use(morgan('dev'));

app.use('/api', require('./api'));

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

async function checkImgAlt(page) {
  let result = await page.$$eval("img", imgs => {
    let count = imgs.length;

    let withAlt = 0;
    for (let img of imgs) {
      if(img.getAttribute("alt")) {
        withAlt++;
      }
    }

    return {
      count: count,
      withAlt: withAlt
    }
  })
  let percent = Math.floor(result.withAlt*100/result.count);
  return {
    allImages: result.count,
    imagesWithAlt: result.withAlt,
    percent: percent,
    passed: percent > 60
  }
}


async function checkHeders(page){
  let headers = await page.$$eval('h1, h2, h3, h4, h5, h6', (headers)=>{
    return headers.map(header => header.tagName)
  })

  let numbers = headers.map(header => header[1]*1);

  let wrongHeaders = 0;
  let currentLevel = 0;
  for (let level of numbers) {
    if (level > currentLevel + 1) {
      wrongHeaders++;
    }

    currentLevel = level;
  }

  return {
    wrongHeaders: wrongHeaders,
    passed: wrongHeaders == 0
  }
};

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

main("https://en.wikipedia.org/wiki/Penguin");




app.listen(5000, ()=>{
  console.log('servevr is runing');
});


