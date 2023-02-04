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
  @media (max-width: var(--transition-width)) {
    height: 60px;
  }
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
    &:hover {
      color: var(--color-primary);
    }
  }
`;

const LinksList = () => (
  <StyledList>
    {links.map(({ href, name }, idx) => (
      <StyledListItem key={idx}>
        <Link to={href}>{name}</Link>
      </StyledListItem>
    ))}
  </StyledList>
);

export default LinksList;
