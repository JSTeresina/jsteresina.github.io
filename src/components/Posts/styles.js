import styled from "styled-components";
import { Link } from "gatsby";

export const Post = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
`;

export const Posts = styled.div`
  padding: 10px 15px;
  width: 100%;
`;

export const Title = styled(Link)`
  color: #000000;
  text-decoration: none;

  h2 {
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: bold;
  }
`;
export const Date = styled.p`
  margin-bottom: 5px;
`;
