import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link } from 'gatsby';

const SiteMap = ({ data }) => (
  <Layout>
    <h1>All site pages</h1>
    <ul>
      {data.allSitePage.edges.map(node => (
        <li>
          <Link to={node.node.path}>{node.node.path}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  query {
    allSitePage(sort: { path: ASC }) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Site Map" />;

export default SiteMap;
