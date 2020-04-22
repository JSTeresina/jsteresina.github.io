import React from "react";
import "./Container.css";

export default ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 4rem;
`;
