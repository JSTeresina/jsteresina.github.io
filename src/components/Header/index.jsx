import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Header, HeaderTitle } from "./styles";

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <HeaderBody>
        <Link to="/">
          <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
        </Link>
      </HeaderBody>
    )}
  />
);
