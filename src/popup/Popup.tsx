import React, { useState } from "react";
import Buttons from "./component/Buttons/Buttons";
import Container from "./component/Container";
import Counter from "./component/Couner";
import Manufacturer from "./component/Manufacturer";
import "./Popup.css";

function Popup() {
  const [texts, setTexts] = useState<string[]>([]);
  // const [amount, setAmount] = useState(0);

  const crawlButtonHandler = () => {
    chrome.runtime.sendMessage({ action: "CHECK" });

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action == "GET_DOM") {
        setTexts(request.source);
      }
      // 여기에서 클립보드를 복사하려고 하면, state의 비동기성 때문에 클립보드에 빈 칸만 복사가 된다.
    });
  };

  const copyButtonHandler = () => {
    navigator.clipboard.writeText(texts.join("\n"));
  };

  // const clickButtonHandler = () => {
  //   chrome.runtime.sendMessage({
  //     action: "CLICK",
  //   });

  // chrome.runtime.sendMessage({ action: "COUNT_REQUEST" });

  // chrome.runtime.onMessage.addListener(function (request, sender) {
  //   chrome.runtime.sendMessage({
  //     action: "CLICKED",
  //   });
  //   // if (request.action == "COUNT_RECIEVED") {
  //   //   for (let i = 0; i < request.source; i++) {
  //   //     setTimeout(() => {
  //   //     }, 2000);
  //   //   }
  //   // }
  //   // 여기에서 클립보드를 복사하려고 하면, state의 비동기성 때문에 클립보드에 빈 칸만 복사가 된다.
  // });
  // };

  return (
    <Container>
      <Counter>모은 독서노트 갯수 : {texts.length}개</Counter>
      {/* <button onClick={clickButtonHandler}>더보기 누르기</button> */}
      <Buttons onCopy={copyButtonHandler} onCrawl={crawlButtonHandler} />
      <Manufacturer href="https://arnopark.tistory.com/" target="_blank">
        Made by ParkGiraffe
      </Manufacturer>
    </Container>
  );
}

export default Popup;
