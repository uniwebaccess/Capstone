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

  let buttons = await page.$$eval(
    'button, span, div, a, p',
    (possibleButtons) => {
      let buttonElemsWithType = 0;
      let buttonElemsNoType = 0;
      let withButtonRoleFocusable = 0;
      let withButtonRoleNOTFocusable = 0;
      for (let possibleButton of possibleButtons) {
        if (possibleButton.outerHTML.includes('<button ')) {
          if (
            possibleButton.outerHTML.includes('<button ') &&
            possibleButton.outerHTML.includes('type=')
          ) {
            buttonElemsWithType++;
          } else buttonElemsNoType++;
        }
        if (
          possibleButton.outerHTML.includes('role=') &&
          possibleButton.outerHTML.includes('tabindex=')
        ) {
          withButtonRoleFocusable++;
        }

        if (
          possibleButton.outerHTML.includes('role=button') &&
          !possibleButton.outerHTML.includes('tabindex=')
        ) {
          withButtonRoleNOTFocusable++;
        }
      }

      const allButtons =
        buttonElemsWithType +
        buttonElemsNoType +
        withButtonRoleNOTFocusable +
        withButtonRoleFocusable;

      const buttonElemPercent =
        Math.ceil(
          (buttonElemsWithType / (buttonElemsWithType + buttonElemsNoType)) *
            100
        ) || 0;
      const buttonRolePercent =
        Math.ceil(
          (withButtonRoleFocusable /
            (withButtonRoleFocusable + withButtonRoleNOTFocusable)) *
            100
        ) || 0;

      const buttonsPercent = (buttonElemPercent + buttonRolePercent) / 2 || 0;

      let result = {
        buttonElemsWithType,
        buttonElemsNoType,
        buttonsPercent,
        withButtonRoleFocusable,
        withButtonRoleNOTFocusable,
        allButtons,
      };

      return {
        buttonElemsWithType,
        buttonElemsNoType,
        buttonsPercent,
        withButtonRoleFocusable,
        withButtonRoleNOTFocusable,
        allButtons,
        result,
      };
    }
  );

  let ControlsCategoryPercent =
    (links.linksPercent * 3 + buttons.buttonsPercent) / 4;

  //console.log(buttons.result);

  return {
    allLinks: links.count,
    linksWithHref: links.withHref,
    hrefPercent: links.hrefPercent || 0,
    hrefPassed: links.hrefPercent > 70,
    linksToNewTab: links.opensNewTabCount,
    allButtons: buttons.allButtons,
    buttonsWithType: buttons.buttonElemsWithType,
    buttonsWithoutType: buttons.buttonElemsNoType,
    withButtonRoleFocusable: buttons.withButtonRoleFocusable,
    withButtonRoleNOTFocusable: buttons.withButtonRoleNOTFocusable,
    buttonsPercent: buttons.buttonsPercent,
    buttonsPassed: buttons.buttonsPercent > 70,
    passed: ControlsCategoryPercent > 70,
    percent: ControlsCategoryPercent,
  };
}

module.exports = controlsCheck;
