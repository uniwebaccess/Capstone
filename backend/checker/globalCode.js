async function globalCodeCheck(page) {
  //check lang attr:
  let lang = await page.$eval('html', (html) => {
    return html.getAttribute('lang');
  });
  const langAttr = !!lang
  console.log("langAttr", langAttr)

  //check <main> tag:
  let main = async () => {
    let main = await page.$$("main")
    if (main.length < 1) main = null
    if (main === null) return { mainTag: false }
    if (main.length > 1) return { mainTag: true, onlyOne: false }
    else {
      return { mainTag: true, onlyOne: true }
    }
  }
  let isMainTag = await main()
  console.log(isMainTag)


  //check for autofocus sttribute====pass when return 0
  let autofocus = 0
  await page.$$eval('button, input, select, textarea', (tags) => {
    for (let tag of tags) {
      if (tag.getAttribute('autofocus')) {
        autofocus++
      }
    }
  })
  console.log("autofocus:", autofocus)
  //checking LISt(not finished yet)
  let li = 0
  let groupElCheck = await page.$$('ul,ol,dl > li')
  console.log("groupElCheck", groupElCheck)



  const percent = () => {

  }

  //PASSED nad PERCENT is not updated yet with all tests!!!
  return {
    langAttr: langAttr,
    isMainTag: isMainTag,
    autofocusAttr: autofocus,
    passed: !!lang,
    percent: !!lang ? 100 : 0,
  };
}

module.exports = globalCodeCheck;
