async function keyboardCheck(page) {
  // get all rows
  page.keyboard.press('Tab');
  const elements = await page.$$eval(
    'input, button, select, a',
    async (elements) => {
      let count = 0;

      // for (let elem of elements) {
      //   if (elem.getAttribute(""))
      // }

      // await page.evaluate(
      //   (elem) => window.document.activeElement === elem,
      //   elements
      // );

      return elements.map((elem) => elem.outerHTML);
    }
  );

  //for (let row of rows) {
  // expect(
  //   await page.evaluate((elem) => elem.getAttribute(`role`), row)
  // ).toEqual(`button`);
  // expect(
  //   await page.evaluate((elem) => elem.getAttribute(`tabindex`), row)
  // ).toEqual(`0`);
  // expect(
  //   await page.evaluate((elem) => window.document.activeElement === elem, row)
  // ).toEqual(true);

  // // move to the next element (click on tab or arrow down button)
  // await page.keyboard.press(i % 2 == 0 ? `Tab` : `ArrowDown`);
  // i++;
  //}
  console.log('elements = ', elements);
}

module.exports = keyboardCheck;
