

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

module.exports = checkHeders;
