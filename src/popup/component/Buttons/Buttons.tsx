import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
`;

type ButtonsType = { onCrawl: () => void; onCopy: () => void };

const Buttons: React.FC<ButtonsType> = (props) => {
  return (
    <ButtonsContainer>
      <Button onClick={props.onCrawl} isCrawl={true}>독서노트 모으기</Button>
      <Button onClick={props.onCopy} isCrawl={false}>클립보드에 복사하기</Button>
    </ButtonsContainer>
  );
};


export default Buttons