function getDom(document_body) {
  console.log(document_body.innerText);
  return document_body.innerText;
}

chrome.runtime.sendMessage({
  action: "getSource",
  source: getDom(document.querySelector('#page_reading_note_detail > article > div.css-18obxw2 > ul')),
});
