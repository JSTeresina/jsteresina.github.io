import React from "react";
import "minireset.css";
import Posts from "../components/Posts";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/global";
import Header from "../components/Header";
import { graphql } from "gatsby";
import styled from "styled-components";

const Index = ({ data }) => (
  <div>
    <GlobalStyles />

    <SEO />
    <Posts data={data} />
  </div>
);

export default Index;

const Presentation = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0db4f;
`;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
