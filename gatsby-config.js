require('dotenv').config();

const plugins = [
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/las-icon.png`, // This path is relative to the root of the site.
    },
  },
];

!!process.env.CONTENTFUL_SPACE_ID &&
  plugins.push({
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Langley Aero Structures Ltd`,
    description: `Transport Canada Approved Maintenance Organization Approval #88-04`,
    author: `Jim Horn`,
    siteUrl: `https://langleyaero.com/`,
  },
  plugins,
};
