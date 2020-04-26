import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F2F3F4;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  p, div {
    font-size: 16px;
  }

  .content p {
    line-height: 1.5;
    text-align: justify;
    margin: 22px 0px;
}
`;
