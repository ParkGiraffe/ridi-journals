import React, { useEffect, useState } from "react";
import Container from "./component/Container";
import Counter from "./component/Couner";
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
      <Container>
        <Counter>모은 독서노트 개수 : {texts.length}개</Counter>
        <button onClick={crawlButtonHandler}>독서노트 모으기</button>
        <button onClick={copyButtonHandler}>클립보드에 복사하기</button>
        <p>Made by ParkGiraffe</p>
      </Container>
  );
}

export default Popup;