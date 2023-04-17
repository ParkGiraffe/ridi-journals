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
  action: "GET_DOM",
  source: getDom(document.querySelectorAll('.css-135eg6y')),
});
