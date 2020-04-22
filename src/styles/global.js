import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap");
  
  font-family: "Roboto", sans-serif;
  background-color: #f2f3f4;
  height: 100%;

  p,
  div {
    font-size: 16px;
  }

  .content p {
    line-height: 1.5;
    text-align: justify;
    margin: 22px 0px;
  }
`;
