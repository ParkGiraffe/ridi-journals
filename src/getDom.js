// function getDom(document_body) {
//   console.log(document_body.innerText);
//   return document_body.innerText;
// }

function getDom(domTexts) {
  const chunk = [];
  domTexts.forEach(e => {
    chunk.push(e.innerText);
  })

  return chunk;
}

chrome.runtime.sendMessage({
  action: "getSource",
  // source: getDom(document.querySelector('#page_reading_note_detail > article > div.css-18obxw2 > ul')),
  source: getDom(document.querySelectorAll('.css-135eg6y')),
});
