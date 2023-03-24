// let [tab] = chrome.tabs.query({ active: true, currentWindow: true });

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action === "CHECK") {
    let [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    // console.log(activeTab.id);
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ["getDom.js"],
    });

    // chrome.tabs.executeScript(null, { file: "getDom.js" }, function () {
    //   if (chrome.extension.lastError) {
    //     document.body.innerText =
    //       "There was an error injecting script : \n" +
    //       chrome.extension.lastError.message;
    //   }
    // });
  }
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === "CLICK") {
//     chrome.scripting.executeScript({
//       target: { tabId: chrome.tabs.query({ active: true, currentWindow: true })[0].Id },
//       files: ["pressButton.js"],
//     });

//     // chrome.tabs.executeScript(null, { file: "pressButton.js" }, function () {
//     //   if (chrome.extension.lastError) {
//     //     document.body.innerText =
//     //       "There was an error injecting script : \n" +
//     //       chrome.extension.lastError.message;
//     //   }
//     // });
//   }
// });

// chrome.runtime.onMessage.addListener(async function (
//   request,
//   sender,
//   sendResponse
// ) {
//   if (request.action === "COUNT_REQUEST") {
//     let [activeTab] = await chrome.tabs.query({
//       active: true,
//       currentWindow: true,
//     });
//     // console.log(activeTab.id);
//     chrome.scripting.executeScript({
//       target: { tabId: activeTab.id },
//       files: ["getCount.js"],
//     });
//   }
// });

chrome.runtime.onMessage.addListener(async function (request, sender) {
  if (request.action == "PRESS_REQUEST") {
    let [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ["pressButton.js"],
    });

    // chrome.alarms.create("myAlarm", {
    //   delayInMinutes: 0,
    //   periodInMinutes: 0.1,
    // });

    // chrome.alarms.onAlarm.addListener(() => {
    // });
  }
});

// const returnHTML = async (url) => {
//   let HTML = await getHTML(url);
//   return HTML.data;
// };

// const getHTML = async (url) => {
//   try {
//     return await axios.get(url);
//   } catch (error) {
//     console.log(error);
//   }
// };
