
async function checkLeng(page){
  let lang = await page.$eval("html", html=>{
    return html.getAttribute("lang")
  });

  return {
    lang: lang,
    passed: !!lang
  }
}


module.exports = checkLeng;
