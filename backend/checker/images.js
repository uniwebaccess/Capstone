async function imagesCheck(page) {
  // page.on('console', (msg) => {
  //   for (let i = 0; i < msg._args.length; ++i)
  //     console.log(`${i}: ${msg._args[i]}`);
  // });
  let result = await page.$$eval('img', (imgs) => {
    let count = imgs.length;
    let withEmptyAlt = 0;
    let withAlt = 0;

    for (let img of imgs) {
      if (img.getAttribute('alt') === '') {
        withEmptyAlt++;
      }
      if (img.getAttribute('alt')) {
        withAlt++;
      }
    }

    return {
      totalImages: count,
      noAlt: count - withAlt - withEmptyAlt,
      withAlt: withAlt,
      withEmptyAlt: withEmptyAlt,
    };
  });

  let percent;
  if (result.totalImages === 0) {
    percent = 100;
  } else {
    percent = Math.floor((
      result.withAlt + result.withEmptyAlt
    )/result.totalImages) * 100;
  }


  //console.log('images w/ empty alt: ', result.withEmptyAlt);


  return {
    allImages: result.totalImages,
    imagesWithAlt: result.withAlt,
    withEmptyAlt: result.withEmptyAlt,
    noAlt: result.noAlt,
    percent: percent,
    passed: percent >= 75,
    imagesData: [result.noAlt, result.withAlt, result.withEmptyAlt],
    imagesName: [
      'Images without alt attribute',
      'Images with alt attribute',
      'Decorative Images',
    ],
  };
}

module.exports = imagesCheck;
