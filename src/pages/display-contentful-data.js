import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContentfulData = ({ data }) => (
    <Layout>
        <h1>{data.allContentfulPost.edges[1].node.name}</h1>
        <p>Contentful data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
);
/*
See the README for Contentful setup instructions. 
You must also have the Post content model set up and populated.
Run `contentful space migration content-models/post.js` from the root of this project to create it
*/
export const query = graphql`
    query {
        allContentfulPost {
            edges {
                node {
                    id
                    name
                    slug
                    entry {
                        raw
                    }
                }
            }
        }
    }
`;

export default ContentfulData;
