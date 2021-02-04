async function controlsCheck(page) {
  let links = await page.$$eval('a', (links) => {
    let count = links.length;

    let withHref = 0;
    let opensNewTabCount = 0;
    for (let link of links) {
      if (link.getAttribute('href')) {
        withHref++;
      }
      if (link.getAttribute('target') === '_blank') {
        opensNewTabCount++;
      }
    }

    //could also add a check for <a> elements with no href that use onClick instead (and inform user why that is not a good solution)
    let percent = Math.floor((withHref * 100) / count);
    return {
      count,
      withHref,
      percent,
      opensNewTabCount,
    };
  });

  let buttons = await page.$$eval('button', (buttons) => {
    let count = buttons.length;
    let withButtonType = 0;
    for (let button of buttons) {
      if (button.getAttribute('type') === 'button') {
        withButtonType++;
      }
    }
    let percent = Math.floor((withButtonType * 100) / count);
    return {
      count,
      withButtonType,
      percent,
    };
  });

  return {
    allLinks: links.count,
    linksWithHref: links.withHref,
    hrefPercent: links.percent,
    hrefPassed: links.percent > 10,
    linksToNewTab: links.opensNewTabCount,
    allButtons: buttons.count,
    buttonsWithType: buttons.withButtonType,
    buttonsPercent: buttons.percent,
    buttonsPassed: buttons.percent > 50,
  };
}

module.exports = controlsCheck;
