import cheerio from 'cheerio';
import {checkImgAlt} from '.';

test("img alt checker success", function() {
  let html = `
  <img alt="a"/>
  <img alt="b"/>
  <img alt="c"/>
  <img alt="d"/>
  `;

  let $ = cheerio.load(html);
  let result = checkImgAlt($);
  expect(result).toStrictEqual({
    allImages: 4,
    imagesWithAlt: 4,
    percent: 100,
    passed: true
  })
});

test("img alt checker failure", function() {
  let html = `
  <img alt="a"/>
  <img alt=""/>
  <img />
  <img alt="d"/>
  `;

  let $ = cheerio.load(html);
  let result = checkImgAlt($);
  expect(result).toStrictEqual({
    allImages: 4,
    imagesWithAlt: 2,
    percent: 50,
    passed: false
  })
});
