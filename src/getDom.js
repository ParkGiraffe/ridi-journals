function getDom(document_body) {
  console.log(document_body.innerText);
  return document_body.innerText;
}

chrome.runtime.sendMessage({
  action: "getSource",
  source: getDom(document.body),
});
