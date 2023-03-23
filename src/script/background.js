chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "CHECK") {
    // console.log("yes");
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
    //   // 두 번째 인수로 length가 1인 Array에 현재 포커스 중인 탭이 담긴다. 비구조화 [tab]을 해서, tab에 변수에 저장하자.
    //   console.log(tab);
    //   const url = tab.url;
    //   // const HTML = returnHTML(url);
    //   console.log(url);
    // });

    chrome.tabs.executeScript(null, { file: "getDom.js" }, function () {
      if (chrome.extension.lastError) {
        document.body.innerText =
          "There was an error injecting script : \n" +
          chrome.extension.lastError.message;
      }
    });
  }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "CLICK") {
    chrome.tabs.executeScript(null, { file: "pressButton.js" }, function () {
      if (chrome.extension.lastError) {
        document.body.innerText =
          "There was an error injecting script : \n" +
          chrome.extension.lastError.message;
      }
    });
  }
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.action === "COUNT_REQUEST") {

//     chrome.tabs.executeScript(null, { file: "getCount.js" }, function () {
//       if (chrome.extension.lastError) {
//         document.body.innerText =
//           "There was an error injecting script : \n" +
//           chrome.extension.lastError.message;
//       }
//     });
//   }
// });



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
