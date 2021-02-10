async function accessCheck(page) {
  let lang = await page.$eval('html', (html) => {
    return html.getAttribute('lang');
  });

  return {
    lang: lang,
    passed: !!lang,
    percent: !!lang ? 100 : 0,
  };
}

module.exports = accessCheck;
