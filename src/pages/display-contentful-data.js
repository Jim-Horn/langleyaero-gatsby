import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Page = ({ data }) => (
    <Layout>
        <h1>{data.allContentfulPost.edges[1].node.slug}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
);

export const query = graphql`
    query {
        allContentfulPost {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
    }
`;

export default Page;
