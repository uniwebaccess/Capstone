

async function headingsCheck(page) {
  let headers = await page.$$eval('h1, h2, h3, h4, h5, h6', (headers) => {
    return headers.map(header => header.tagName)
  })


  let numbers = headers.map(header => header[1] * 1);

  let wrongHeaders = 0;
  let currentLevel = 0;
  for (let level of numbers) {
    if (level > currentLevel + 1) {
      wrongHeaders++;
    }
    currentLevel = level;
  }
  const logicSequenceFunc = () => {
    if (wrongHeaders !== 0) return false
    return true
  }

  const checkH1 = await page.$$('h1')
  const h1 = () => {

    if (checkH1.length === 1)
      return true
    return false
  }

  // const checkHeaderTag = await page.$('header')
  // const checkSectionTag = await page.$('section')

  const h1OnlyOne = h1()
  // const skipHeader = skipHeaderFunc()
  const logicSequence = logicSequenceFunc()
  //order is important!! and based on testNames(should match)
  let calculateEachTest = []



  const totalScore = () => {
    let total = 100
    if (h1OnlyOne === false) {
      total -= 30
      calculateEachTest.push(10)
    } else {
      calculateEachTest.push(100)
    }

    if (logicSequence === false) {
      total -= 30
      calculateEachTest.push(10)
    } else {
      calculateEachTest.push(100)
    }

    // if (checkHeaderTag === null) {
    //   total -= 10
    //   calculateEachTest.push(10)
    // } else {
    //   calculateEachTest.push(100)
    // }

    // if (checkSectionTag === null) {
    //   total -= 10
    //   calculateEachTest.push(10)
    // } else {
    //   calculateEachTest.push(100)
    // }

    return total
  }
  const totalPercent = totalScore()
  calculateEachTest.push(totalPercent)
  return {
    onlyOneH1: h1OnlyOne,
    logicSequence: logicSequence,
    total: totalPercent,
    // checkHeaderTag: checkHeaderTag,
    // checkSectionTag: checkSectionTag,
    testNames: ["H1 Tag",
      // "Correct Order of H-Tags",
      "Logic Sequence",
      // "Header Tag", "Section Tag",
      "total"],
    eachTest: calculateEachTest,

  }
};

module.exports = headingsCheck;

