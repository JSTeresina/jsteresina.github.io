import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

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
      <Head>
        <NavBar>
          <h1>JSThe</h1>
          <Links>
            <Link>Início</Link>
            <Link>Sobre</Link>
          </Links>
        </NavBar>
        <Link to="/">
          <h1 className="header-title">{data.site.siteMetadata.title}</h1>
        </Link>
      </Head>
    )}
  />
);
export default Header;

const Head = styled.header`
  height: 300px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  background-image: url("/background.png");
  background-repeat: no-repeat;
  background-position: center 15%;
  background-size: cover;
  background-color: #3e5fbc;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    right: 50%;
    border-right: 1000px solid transparent;
    border-left: 1000px solid;
  }
  &::after {
    left: 50%;
    border-left: 1000px solid transparent;
    border-right: 1000px solid;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50%;
    z-index: 100;
    border-bottom: 100px solid #f2f3f4;
    -moz-transform: rotate(0.000001deg);
    -webkit-transform: rotate(0.000001deg);
    -o-transform: rotate(0.000001deg);
    -ms-transform: rotate(0.000001deg);
    transform: rotate(0.000001deg);
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-weight: bold;
    color: #000000;
  }
`;

const NavBar = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  
  h1 {
    color: white;
    font-weight: bold;
  }
  a {
    margin: 0 10px;
    color: white;
    font-weight: bold;
  }
`;

const Links = styled.div``;
