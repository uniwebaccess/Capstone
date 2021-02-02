

const express = require('express');
const puppeteer = require('puppeteer');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');


const app = express()


app.use(morgan('dev'));
app.use(express.json())
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', require('./api'))


app.post('/url', async (req, res, next) => {
  try {
    console.log("req.body.url", req.body.url)
    const result = await main(req.body.url)
    console.log("result", result)
    res.json(result)
  } catch (err) {
    next(err)
  }
})


app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

async function checkImgAlt(page) {
  let result = await page.$$eval("img", imgs => {
    let count = imgs.length;

    let withAlt = 0;
    for (let img of imgs) {
      if (img.getAttribute("alt")) {
        withAlt++;
      }
    }

    return {
      count: count,
      withAlt: withAlt
    }
  })
  let percent = Math.floor(result.withAlt * 100 / result.count);
  return {
    allImages: result.count,
    imagesWithAlt: result.withAlt,
    percent: percent,
    passed: percent > 60
  }
}


async function checkHeders(page) {
  let headers = await page.$$eval('h1, h2, h3, h4, h5, h6', (headers) => {
    return headers.map(header => header.tagName)
  })

  let numbers = headers.map(header => header[1] * 1);

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
  return score;
}

// main("https://en.wikipedia.org/wiki/Penguin");




app.listen(5000, () => {
  console.log('server is running on 5000');
});

module.exports = app
