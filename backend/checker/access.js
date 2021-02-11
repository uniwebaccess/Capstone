

const accessCheck = async (page) => {

  let sections = await page.$$eval('section', (sections) => {
    return sections.map((section) => 1);
  });
  let headers = await page.$$eval('header', (sections) => {
    return sections.map((section) => 1);
  });

  const headerTagFunc = () => {
    if (headers.length) return false;
    return true;
  };
  const sectionTagFunc = () => {
    if (sections.length) return false;
    return true;
  };
  const headerTag = headerTagFunc()
  const sectionTag = sectionTagFunc()

  // console.log(sections)
  // console.log(headers)

  let sectionTagScore = 0
  let headerTagScore = 0
  // let hTagSkipScore = 0


  const totalScore = () => {
    let total = 0;
    if (headerTag === true) {
      total += 50;
      headerTagScore = 50
    }
    if (sectionTag === true) {
      total += 50;
      sectionTagScore = 50
    }
    // if (hTagSkip === true) {
    //   total += 30;
    //   hTagSkipScore = 30
    // }
    return total;
  };
  const totalPercent = totalScore();




  return {

    percent: totalPercent,
    passed: totalPercent > 70,
  }
}

module.exports = accessCheck;
