import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { HeaderTitle, HeaderBody } from "./styles";

const Header = () => (
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

export default Header;
