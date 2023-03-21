import React, { useEffect } from "react";
import "./Popup.css";

function Popup() {
  const buttonHandelr = (event: React.MouseEvent) => {
    event.preventDefault();
    chrome.runtime.sendMessage({ action: "CHECK" });
    console.log("execute");

    chrome.runtime.onMessage.addListener(function (request, sender) {
      console.log(request.source);
      if (request.action == "getSource") {
        console.log(request.source);
        document.body.innerText = request.source;
      }
    });
  };

  return (
    <div className="Popup">
      <button onClick={buttonHandelr}>crawl hilights in this page</button>
    </div>
  );
}

export default Popup;
