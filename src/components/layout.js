/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import LinksList from './links';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const MainDiv = styled.div`
    background: rgba(255, 255, 255, 0.8);
    margin: 0 auto;
    max-width: var(--size-content);
    padding: var(--size-gutter);
  `;

  const StyledFooter = styled.footer`
    margin-top: var(--space-5);
    font-size: var(--font-sm);
  `;
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        description={data.site.siteMetadata?.description}
      />
      <MainDiv>
        <main>{children}</main>
        <StyledFooter>
          {data.site.siteMetadata?.description}
          <LinksList />
          <br />© {new Date().getFullYear()} &middot;{' '}
          {data.site.siteMetadata?.title} | <Link to="/sitemap/">Site Map</Link>
        </StyledFooter>
      </MainDiv>
    </>
  );
};

export default Layout;
