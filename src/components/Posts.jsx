import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Posts = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.map(({ node }) => (
    <Post key={node.fields.slug}>
      <Link className="link" to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <Date>{node.frontmatter.date}</Date>
      <p>{node.frontmatter.description}</p>
    </Post>
  ));
  return <PostList>{posts}</PostList>;
};
export default Posts;

const Post = styled.div`
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: #ffffff;

  .link {
    color: #000000;
    text-decoration: none;
    h2 {
      margin-bottom: 5px;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;

const PostList = styled.div`
  padding: 10px 15px;
  width: 100%;
`;
const Date = styled.p`
  margin-bottom: 5px;
`;
