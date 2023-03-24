import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button<{option: string}>`
  ${(props) => props.option === 'crawl' && css`background-color: #1C84F6;`}
  ${(props) => props.option === 'copy' && css` background-color: #2C3953;`}
  ${(props) => props.option === 'more' && css`background-color: #1B5EA8;`}
  /* background-color: #2C3953; */
  width: 230px;
  height: 60px;
  border-radius: 40px;
  color: #f2f2f2;
  font-size: 20px;
  font-weight: bold;
`;



export default Button;