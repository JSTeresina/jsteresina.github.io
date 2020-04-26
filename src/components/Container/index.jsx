import React from "react";
import styled from "styled-components";

const Container = ({ children }) => <Div>{children}</Div>;
export default Container;

const Div = styled.div`
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 4rem;
`;
