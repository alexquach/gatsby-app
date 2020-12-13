/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Alex Quach`,
    // pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: "Alex Quach Porfolio", // Navigation and Site Title
    siteTitleShort: "Alex Quach Porfolio", // Alternative Site title for SEO
    siteAuthor: "Alex Quach", // Author Details
    siteLogoText: "Quach", // Text for logo
    siteUrl: "http://thequach.com/gatsby-app", // Domain of your site. No trailing slash!
    siteLanguage: "en", // Language Tag on <html> element
    siteDescription:
      "Alex Quach Personal Website - About me and my experiences.",
    siteKeywords: "alex quach personal website porfolio mit",
  },
  
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
