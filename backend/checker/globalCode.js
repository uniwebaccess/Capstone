
async function globalCodeCheck(page) {
  let lang = await page.$eval("html", html => {
    return html.getAttribute("lang")
  });

  return {
    lang: lang,
    passed: !!lang
  }
}


module.exports = globalCodeCheck;
