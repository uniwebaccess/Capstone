
async function imagesCheck(page) {
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
  let percent;
  if (result.count == 0) {
    percent = 100;
  } else {
    percent = Math.floor(result.withAlt * 100 / result.count)
  }
  return {
    allImages: result.count,
    imagesWithAlt: result.withAlt,
    percent: percent,
    passed: percent > 10
  }
}


module.exports = imagesCheck;
