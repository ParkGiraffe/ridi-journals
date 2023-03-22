import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button<{ isCrawl: boolean }>`
  ${(props) =>
    props.isCrawl
      ? css`
          background-color: #1c84f6;
        `
      : css`
          background-color: #2C3953;
        `}

  width: 230px;
  height: 65px;
  border-radius: 40px;
  color: #f2f2f2;
  font-size: 20px;
  font-weight: bold;
`;

export default Button;
