// document.addEventListener("DOMContentLoaded", function() {
// 	var btn = document.getElementById("btn_copy");
// 	btn.addEventListener("click", function() {
// 		var copyText = document.getElementById("out");
// 		copyText.select();
// 		document.execCommand("copy");
// 	});

// 	chrome.tabs.executeScript({
// 		// code: 'document.getElementByClassName("css-1jrt56o").contentWindow.document.li.innerHTML'
// 	}, function (result) {
// 		let data = result[0];
//     console.log(data);
//     // let div = document.createElement('div');
// 		// div.innerHTML = data;

// 		// let title = div.querySelector(".tit-box > .fl > table > tbody > tr > td > .b").innerText;
// 		// let linkurl = div.querySelector("#linkUrl").innerText;

// 		// document.getElementById("out").value = title + "\n" + linkurl;

// 		// // Copy 버튼을 만들지 않고, 팝업창 띄우는 것으로 복사하려면, 복사 코드를 아래에 집어넣으세요 :)
// 	});
// });

// function get_source(document_body) {
//   console.log(document_body.innerText)
//   return document_body.innerText;
// }

// chrome.runtime.sendMessage({
//   action: "getSource",
//   source: get_source(document.body),
// });
