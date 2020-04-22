import React from "react";
import "minireset.css";
import Posts from "../components/Posts";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/global";
import Header from "../components/Header";

export default ({ data }) => (
  <div>
    <GlobalStyles />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header title={title} />
    <Presentation></Presentation>
    <main role="main">
      <Container>{children}</Container>
    </main>
    <SEO />
    <Posts data={data} />
  </div>
);

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
