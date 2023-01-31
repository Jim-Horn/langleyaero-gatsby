# Helpful links

## Contentful

-   Sign up for Contentful: https://www.contentful.com/sign-up/
-   Install contentful-cli: `npm install -g gatsby-cli`
-   Info on migrations: https://github.com/contentful/contentful-migration
-   Migration examples: https://github.com/contentful/contentful-migration/tree/master/examples
-   A Gatsby/Contentful starter: https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/
-   Refreshing Contentful data in Gatsby: Create a bookmark with this code in its URL:

    ```js
    javascript: void (function () {
        var post = new XMLHttpRequest();
        post.open("POST", "http://localhost:8000/__refresh");
        post.send();
    })();
    ```

## GatsbyJS

-   Main site: https://www.gatsbyjs.com/
-   Free hosting: https://www.gatsbyjs.com/products/cloud/hosting/
-   Gatsby starters: https://www.gatsbyjs.com/starters/
-   Gatsby themes: https://www.gatsbyjs.com/docs/themes/
