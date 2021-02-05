
async function imagesCheck(page) {
  let result = await page.$$eval("img", imgs => {
    let count = imgs.length;
    let imagesWithEmptyAlt = 0
    if (imgs.alt !== "") {
      imagesWithEmptyAlt++
    }

    let withAlt = 0;
    for (let img of imgs) {
      if (img.getAttribute("alt")) {
        withAlt++;

      }
    }
    return {
      count: count,
      withAlt: withAlt,
      imagesWithEmptyAlt: imagesWithEmptyAlt
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
    imagesWithEmptyAlt: result.imagesWithEmptyAlt,
    percent: percent,
    passed: percent > 25,
    imagesData: [result.count, result.withAlt, result.imagesWithEmptyAlt],
    imagesName: ["Total Images", "Images with alt attribute", "Decorative Images"]

  }
}


module.exports = imagesCheck;
