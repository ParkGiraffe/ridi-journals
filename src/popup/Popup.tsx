import React, { useEffect, useState } from "react";
import "./Popup.css";

function Popup() {
  const [texts, setTexts] = useState<string[]>([]);

  const crawlButtonHandler = (event: React.MouseEvent) => {
    // event.preventDefault();
    chrome.runtime.sendMessage({ action: "CHECK" });

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "getSource") {
        setTexts(request.source);
      }
      // 여기에서 클립보드를 복사하려고 하면, state의 비동기성 때문에 클립보드에 빈 칸만 복사가 된다.
    });
  };

  const copyButtonHandler = () => {
    navigator.clipboard.writeText(texts.join("\n"));
  };

  return (
    <div className="Popup">
      <button onClick={crawlButtonHandler}>crawl hilights</button>
      <button onClick={copyButtonHandler}>copy hilights</button>
      {texts.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}

export default Popup;
