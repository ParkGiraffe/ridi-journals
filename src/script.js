document.addEventListener("DOMContentLoaded", function() {
	var btn = document.getElementById("btn_copy");
	btn.addEventListener("click", function() {
		var copyText = document.getElementById("out");
		copyText.select();
		document.execCommand("copy");
	});

	chrome.tabs.executeScript({
		code: 'document.getElementById("cafe_main").contentWindow.document.body.innerHTML'
	}, function (result) {
		let data = result[0];
		let div = document.createElement('div');
		div.innerHTML = data;

		let title = div.querySelector(".tit-box > .fl > table > tbody > tr > td > .b").innerText;
		let linkurl = div.querySelector("#linkUrl").innerText;

		document.getElementById("out").value = title + "\n" + linkurl;

		// Copy 버튼을 만들지 않고, 팝업창 띄우는 것으로 복사하려면, 복사 코드를 아래에 집어넣으세요 :)
	});
});