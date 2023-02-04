import * as React from 'react';
import { Link } from 'gatsby';
import LinksList from './links';
import logo from '../images/las-logo.jpeg';
import styled from 'styled-components';

const transitionWidth = '675px';

const LogoBox = styled.div`
  &:hover {
    color: var(--color-primary);
  }
  display: flex;
  flex-direction: column;
  img {
    height: 80px;
    margin: 0;
    @media (max-width: ${transitionWidth}) {
      height: 60px;
    }
  }
  span {
    margin-top: 0.25rem;
    font-size: var(--font-sm);
    font-weight: bold;
    white-space: nowrap;
  }
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${transitionWidth}) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const StyledHeader = styled.header`
  max-width: var(--size-content);
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${transitionWidth}) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <LogoBox>
        <img alt="Langley Aero Structures Logo" src={logo} />
        <span>{siteTitle}</span>
      </LogoBox>
    </Link>
    <StyledDescription>
      <LinksList />
    </StyledDescription>
  </StyledHeader>
);

export default Header;
