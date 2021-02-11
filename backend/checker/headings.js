async function headingsCheck(page) {
  //Checking Logic Sequence:
  let headers = await page.$$eval('h1, h2, h3, h4, h5, h6', (headers) => {
    return headers.map((header) => header.tagName);
  });

  let numbers = headers.map((header) => header[1] * 1);

  let wrongHeaders = 0;
  let currentLevel = 0;
  let skipHeaders = 0
  for (let level of numbers) {
    if (level > currentLevel + 1) {
      wrongHeaders++;
      skipHeaders++
    }
    if (level < currentLevel - 1) {
      skipHeaders++
    }
    currentLevel = level;
  }
  const logicSequenceFunc = () => {
    if (wrongHeaders !== 0) return false;
    return true;
  };
  const skipHeadersFunc = () => {
    if (skipHeaders !== 0) return false;
    return true;
  };

  //====Checking h1 tag:
  const checkH1 = await page.$$('h1');
  const h1 = () => {
    if (checkH1.length === 1) return true;
    return false;
  };



  const h1OnlyOne = h1();
  const logicSequence = logicSequenceFunc();
  const hTagSkip = skipHeadersFunc()
  let h1TagScore = 0
  let logicSequenceScore = 0
  let hTagSkipScore = 0


  const totalScore = () => {
    let total = 0;
    if (h1OnlyOne === true) {
      total += 40;
      h1TagScore = 40
    }
    if (logicSequence === true) {
      total += 30;
      logicSequenceScore = 30
    }
    if (hTagSkip === true) {
      total += 30;
      hTagSkipScore = 30
    }
    return total;
  };
  const totalPercent = totalScore();

  console.log(totalPercent)
  console.log(numbers)

  return {
    onlyOneH1: { h1OnlyOne: h1OnlyOne, score: h1TagScore },
    logicSequence: { logicSequence: logicSequence, score: logicSequenceScore },
    hTagSkip: { hTagSkip: hTagSkip, score: hTagSkipScore },
    percent: totalPercent,
    passed: totalPercent > 70,
    testNames: ['H1 Tag', 'Logic Sequence', 'Skip H Tag', 'Your Score', 'Average Score'],

  };
}

module.exports = headingsCheck;
