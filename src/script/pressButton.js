const pressButton = () => {
  let nullCount = 0;

  let interval = setInterval(() => {
    !document.querySelector(".css-pft3kl") && nullCount++;

    if (nullCount > 2) {
      clearInterval(interval);
      chrome.runtime.sendMessage({
        action: "PRESS_FINISHED",
        // source: pressButton(),
      });
    }

    document.querySelector(".css-pft3kl").click();
  }, 3000);
};

pressButton();

// chrome.runtime.sendMessage({
//   // action: "PRESS_FINISHED",
//   source: pressButton(),
// });
