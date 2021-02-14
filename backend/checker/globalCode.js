async function globalCodeCheck(page) {
  //check lang attr:
  let lang = await page.$eval("html", (html) => {
    return html.getAttribute("lang");
  });
  const langAttr = !!lang;
  // console.log("langAttr", langAttr)

  //check <main> tag:
  let main = async () => {
    let main = await page.$$("main");
    if (main.length < 1) {
      return { mainTag: false };
    } else if (main.length > 1) {
      return { mainTag: true, onlyOne: false };
    } else {
      return { mainTag: true, onlyOne: true };
    }
  };
  const isMainTag = await main();
  // console.log(isMainTag)

  //Checks for autofocus. If there is autofocus it fails
  let autofocus = true;
  await page.$$eval("button, input, select, textarea", (tags) => {
    for (let tag of tags) {
      if (tag.getAttribute("autofocus")) {
        autofocus = false;
      }
    }
  });
  // console.log("autofocus:", autofocus)

  //Use <li> Element for list content

  const useLi = async () => {
    const listElements = await page.$$eval("ul,ol,dl", (options) =>
      options.map((option) => 1)
    );
    if (listElements.length) {
      const options = await page.$$eval("ul,ol,dl > li", (options) =>
        options.map((option) => 1)
      );
      if (listElements.length === options.length) {
        return true;
      } else return false;
    } else {
      return "no lists on the page";
    }
  };

  //getting result for listTag:

  //this warning hsa to be tested , but in other file it didtnt show up and worked perfectly well . so without "await" the async function wont work .
  const useListElement = await useLi();

  //total percent and weight of each test calculation:
  const percent = () => {
    let totalScore = 0;
    if (langAttr) {
      totalScore += 30;
    }
    if (isMainTag.mainTag) {
      if (isMainTag.onlyOne) {
        if (isMainTag.onlyOne === true) {
          totalScore += 10;
        }
      } else {
        totalScore += 20;
      }
    }
    if (autofocus === true) {
      totalScore += 30;
    }
    if (useListElement === true || "no lists on the page") {
      totalScore += 20;
    }
    return totalScore;
  };
  const total = percent();

  // console.log("this is total score:", total)
  //SCORE passed in each indivisual test is % -how much this test contributed to a total% for entire subTest group. for example( total=80%, and 30% from it comes from langAttr if it passes the test)
  //======IT'S VERY GOOD FOR GRAPHS!!!=====
  return {
    langAttr: langAttr,
    isMainTag: isMainTag,
    autofocusAttr: autofocus,
    useListElement: useListElement,
    passed: total >= 70,
    percent: total,
  };
}

module.exports = globalCodeCheck;
