import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const links = [
  { name: 'Home', href: '/' },
  { name: 'Qualifications', href: '/qualifications' },
  { name: 'Quality Control', href: '/quality-control' },
  { name: 'Contact Info', href: '/our-facility' },
];
export { links };

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`;

const StyledListItem = styled.li`
  &::after {
    content: '|';
    padding: 0 0.5rem;
  }
  :last-of-type::after {
    content: '';
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const LinksList = () => (
  <div
    style={{
      maxWidth: '95vw',
      overflowX: 'scroll',
    }}>
    <StyledList>
      {links.map(({ href, name }, idx) => (
        <StyledListItem key={idx}>
          <Link to={href}>{name}</Link>
        </StyledListItem>
      ))}
    </StyledList>
  </div>
);

export default LinksList;
