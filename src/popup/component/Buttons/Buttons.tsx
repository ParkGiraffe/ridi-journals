import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;
`;

type ButtonsType = {
  onCrawl: () => void;
  onCopy: () => void;
  onMore: () => void;
};

const Buttons: React.FC<ButtonsType> = (props) => {
  return (
    <ButtonsContainer>
      <Button onClick={props.onMore} option={"more"}>
        더보기 누르기
      </Button>
      <Button onClick={props.onCrawl} option={"crawl"}>
        독서노트 모으기
      </Button>
      <Button onClick={props.onCopy} option={"copy"}>
        클립보드에 복사하기
      </Button>
    </ButtonsContainer>
  );
};

export default Buttons;
