import puppeteer from 'puppeteer';

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

export default checkImgAlt;
