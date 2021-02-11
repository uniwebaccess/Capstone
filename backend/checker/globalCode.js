


async function globalCodeCheck(page) {
  //check lang attr:
  let lang = await page.$eval('html', (html) => {
    return html.getAttribute('lang');
  });
  const langAttr = !!lang
  // console.log("langAttr", langAttr)

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
  const isMainTag = await main()
  // console.log(isMainTag)


  //check for autofocus sttribute====pass when return 0
  let autofocus = 0
  await page.$$eval('button, input, select, textarea', (tags) => {
    for (let tag of tags) {
      if (tag.getAttribute('autofocus')) {
        autofocus++
      }
    }
  })
  // console.log("autofocus:", autofocus)


  //Use <li> Element for list content

  const useLi = async () => {

    const listElements = await page.$$eval('ul,ol,dl', options => options.map(option => 1));
    if (listElements.length) {
      const options = await page.$$eval('ul,ol,dl > li', options => options.map(option => 1));
      if (listElements.length === options.length) {
        return true
      } else return false
    } else {
      return "no lists on the page"
    }
  }

  //getting result for listTag:

  //this warning hsa to be tested , but in other file it didtnt show up and worked perfectly well . so without "await" the async function wont work .
  const useListElement = await useLi()

  //total percent and weight of each test calculation:

  let listTagScore = 0
  let autofocusScore = 0
  let mainTagScore = 0
  let langAttrScore = 0

  const percent = () => {
    let totalScore = 0
    if (langAttr === true) {
      totalScore += 30
      langAttrScore = 30
    }
    if (isMainTag.mainTag === true) {
      if (isMainTag.onlyOne) {
        if (isMainTag.onlyOne === false) {
          totalScore += 10
          mainTagScore = 10
        }
      } else {
        totalScore += 20
        mainTagScore = 20
      }
    }
    if (autofocus === 0) {
      totalScore += 30
      autofocusScore = 30
    }
    if (useListElement === true || "no lists on the page") {
      listTagScore = 20
      totalScore += 20
    }
    return totalScore
  }
  const total = percent()

  // console.log("this is total score:", total)
  //SCORE passed in each indivisual test is % -how much this test contributed to a total% for entire subTest group. for example( total=80%, and 30% from it comes from langAttr if it passes the test)
  //======IT'S VERY GOOD FOR GRAPHS!!!=====
  return {
    langAttr: { langAttr: langAttr, score: langAttrScore },
    isMainTag: { isMainTag: isMainTag, score: mainTagScore },
    autofocusAttr: { autofocus: autofocus, score: autofocusScore },
    useListElement: { useListElement: useListElement, score: listTagScore },
    passed: percent >= 70,
    percent: total,
  };
}

module.exports = globalCodeCheck;
