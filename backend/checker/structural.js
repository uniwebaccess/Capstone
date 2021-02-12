const structuralCheck = async (page) => {

  //checking if forms with inputs have labels:
  let formsWithLabels = []
  let formsWithInput = await page.$$eval('form >input', (forms) => {
    return forms.map((form) => 1);
  });
  if (formsWithInput.length) {
    formsWithLabels = await page.$$eval('form > label', (formsWithLabels) => {
      return formsWithLabels.map((section) => 1);
    });
  }
  const formsWithInputsAndLabelsFunc = () => {
    if (!formsWithInput.length) {
      return "no valid forms for the test"
    } else {
      if (!formsWithLabels.length) {
        return false
      } else {
        return true
      }
    }
  }


  //checking header tag:
  let headers = await page.$$eval('header', (sections) => {
    return sections.map((section) => 1);
  });
  const headerTagFunc = () => {
    if (headers.length) return false;
    return true;
  };

  //checking section tag:
  let sections = await page.$$eval('section', (sections) => {
    return sections.map((section) => 1);
  });
  const sectionTagFunc = () => {
    if (sections.length) return false;
    return true;
  };


  //getting result:
  const headerTag = headerTagFunc()
  const sectionTag = sectionTagFunc()
  const inputAndLabel = formsWithInputsAndLabelsFunc()



  let sectionTagScore = 0
  let headerTagScore = 0
  let inputAndLabelScore = 0


  const totalScore = () => {
    let total = 0;
    if (headerTag === true) {
      total += 30;
      headerTagScore = 30
    }
    if (sectionTag === true) {
      total += 40;
      sectionTagScore = 40
    }
    if (inputAndLabel === true || "no valid forms for the test") {
      total += 30;
      inputAndLabelScore = 30
    }
    return total;
  };
  const totalPercent = totalScore();

  // console.log(sectionTag, headerTag, inputAndLabel)
  // console.log(totalPercent)

  return {
    sectionTag: { sectionTag: sectionTag, score: sectionTagScore },
    headerTag: { headerTag: headerTag, score: headerTagScore },
    inputAndLabel: { inputAndLabel: inputAndLabel, score: inputAndLabelScore },
    percent: totalPercent,
    passed: totalPercent > 70,
  }
}

module.exports = structuralCheck;
