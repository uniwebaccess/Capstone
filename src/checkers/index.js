import cheerio from 'cheerio';

async function checkPage(url) {
  //
  return {
    score: 80,
    //..
  }
}

export function checkImgAlt($) {
  let allImages = $("img");
  let withAlt = 0;
  allImages.each(function() {
    if($(this).attr("alt")) {
      withAlt++;
    }
  });
  let percent = Math.floor(withAlt*100/allImages.length);
  return {
    allImages: allImages.length,
    imagesWithAlt: withAlt,
    percent: percent,
    passed:percent > 60
  }
}

export function headerChecker($) {
  let allH1 = $("h1").length;
  return {
    h1Count: allH1,
    passed: allH1 == 1
  }
}

export function autofocusChecker($) {
  let autofocuses = 0;
  let inputs = $("input");
  inputs.each(function(){
   let input = $("input");
   let autofocus = input.attr("autofocus");
   if (autofocus) {
     autofocuses++;
   }
  })
  return {
    inputs: inputs.length,
    autofocus: autofocuses,
    passed: autofocuses < 1
 }
}


export function langChecker($){
  let html = $("html");
  let lang = html.attr("lang")
  return {
   passed: lang != undefined,
   lang,
 }
}

export function attributeTitleChecker($){
  let withTitle = $("[title]");
  return{
    withTitle: withTitle.length,
    passed: withTitle.length == 0
  }
}
