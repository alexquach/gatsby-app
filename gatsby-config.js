/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // siteMetadata: {
  //   title: `Pandas Eating Lots`,
  // },
  plugins: [
    `gatsby-theme-scarlet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pleasedata`,
        path: `${__dirname}/src/gatsby-theme-scarlet/data/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ],
  pathPrefix: "/gatsby-app",
}
