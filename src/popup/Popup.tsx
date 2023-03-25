import React, { useState } from "react";
import Buttons from "./component/Buttons/Buttons";
import Container from "./component/Container";
import Counter from "./component/Couner";
import Manufacturer from "./component/Manufacturer";
import MoreText from "./component/MoreText";
import "./Popup.css";

function Popup() {
  const [texts, setTexts] = useState<string[]>([]);
  const [isFinshed, setIsFinished] = useState(false);
  // const [amount, setAmount] = useState(0);

  const crawlButtonHandler = () => {
    chrome.runtime.sendMessage({ action: "CHECK" });

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "GET_DOM") {
        setTexts(request.source);
      }
    });
  };

  const copyButtonHandler = () => {
    navigator.clipboard.writeText(texts.join("\n"));
  };

  const clickButtonHandler = async () => {
    await chrome.runtime.sendMessage({ action: "PRESS_REQUEST" });

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "PRESS_FINISHED") {
        setIsFinished(true);
      }
    });
  };

  return (
    <Container>
      <Counter>모은 독서노트 갯수 : {texts.length}개</Counter>
      {isFinshed && <MoreText>더보기 버튼이 전부 눌러졌습니다.</MoreText>}

      <Buttons
        onCopy={copyButtonHandler}
        onCrawl={crawlButtonHandler}
        onMore={clickButtonHandler}
      />
      <Manufacturer href="https://arnopark.tistory.com/626" target="_blank">
        Made by ParkGiraffe
      </Manufacturer>
    </Container>
  );
}

export default Popup;
