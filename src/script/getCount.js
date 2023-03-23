function getCount(domTexts) {
  console.log(domTexts);
  return Number(domTexts.innerText) / 20;
}

chrome.runtime.sendMessage({
  action: "COUNT_RECIEVED",
  // source: getDom(document.querySelector('#page_reading_note_detail > article > div.css-18obxw2 > ul')),
  source: getCount(document.querySelector('.css-snpzj3')),
});
