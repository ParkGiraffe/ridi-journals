const pressButton = () => {
  document.querySelector(".css-pft3kl").click();
};

chrome.runtime.sendMessage({
  action: "CLICKED",
  // source: getDom(document.querySelector('#page_reading_note_detail > article > div.css-18obxw2 > ul')),
  source: pressButton(),
});
