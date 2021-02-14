async function controlsCheck(page) {
  let links = await page.$$eval('a', (links) => {
    let count = links.length;

    let withHref = 0;
    let withFocus = 0;
    let opensNewTabCount = 0;
    for (let link of links) {
      if (link.getAttribute('href')) {
        withHref++;
      }
      if (link.getAttribute('target') === '_blank') {
        opensNewTabCount++;
      }
      //this doesn't work - need to update
      if (link.getAttribute('focus')) {
        withFocus++;
      }
    }

    //could also add a check for <a> elements with no href that use onClick instead (and inform user why that is not a good solution)
    let hrefPercent = Math.floor((withHref / count) * 100);
    let newTabPercent = Math.floor(((count - opensNewTabCount) / count) * 100);
    let linksPercent = Math.floor((hrefPercent + newTabPercent) / 2);

    return {
      count,
      withHref,
      hrefPercent,
      newTabPercent,
      linksPercent,
      opensNewTabCount,
      withFocus,
    };
  });

  let buttons = await page.$$eval('button', (buttons) => {
    let count = buttons.length;
    let withButtonType = 0;
    for (let button of buttons) {
      if (button.getAttribute('role') === 'button') {
        withButtonType++;
      }
    }
    let buttonsPercent = Math.floor((withButtonType * 100) / count);
    return {
      count,
      withButtonType,
      buttonsPercent,
    };
  });

  let ControlsCategoryPercent =
    (links.linksPercent + buttons.buttonsPercent) / 2;

  return {
    allLinks: links.count,
    linksWithHref: links.withHref,
    hrefPercent: links.hrefPercent,
    hrefPassed: links.hrefPercent > 75,
    linksToNewTab: links.opensNewTabCount,
    allButtons: buttons.count,
    buttonsWithType: buttons.withButtonType,
    buttonsPercent: buttons.buttonsPercent,
    buttonsPassed: buttons.buttonsPercent > 75,
    passed: ControlsCategoryPercent > 75,
    percent: ControlsCategoryPercent,
  };
}

module.exports = controlsCheck;
