import React from "react";
import { Post, Title, Date, Posts } from "./styles";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.map(({ node }) => (
    <Post key={node.fields.slug}>
      <Title to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Title>
      <Date>{node.frontmatter.date}</Date>
      <p>{node.frontmatter.description}</p>
    </Post>
  ));
  return <Posts>{posts}</Posts>;
};
