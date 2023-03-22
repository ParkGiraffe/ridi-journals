import React, { useState } from "react";
import Buttons from "./component/Buttons/Buttons";
import Container from "./component/Container";
import Counter from "./component/Couner";
import Manufacturer from "./component/Manufacturer";
import "./Popup.css";

function Popup() {
  const [texts, setTexts] = useState<string[]>([]);

  const crawlButtonHandler = () => {
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
      <Counter>모은 독서노트 갯수 : {texts.length}개</Counter>
      <Buttons onCopy={copyButtonHandler} onCrawl={crawlButtonHandler} />
      <Manufacturer href="https://arnopark.tistory.com/" target="_blank">Made by ParkGiraffe</Manufacturer>
    </Container>
  );
}

export default Popup;
