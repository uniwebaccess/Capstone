async function accessCheck(page) {
  let lang = await page.$eval('html', (html) => {
    return html.getAttribute('lang');
  });

  return {

    passed: true,
    percent: !!lang ? 100 : 0,
  };
}

module.exports = accessCheck;
