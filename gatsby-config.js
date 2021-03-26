module.exports = {
  siteMetadata: {
    title: `Welcome to Carvengate`,
    description: `software development, branding, digital marketing`,
    author: `Martins Aloba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carvengate-site`,
        short_name: `carvengate`,
        start_url: `/`,
        background_color: `#0066CC`,
        theme_color: `#0066CC`,
        display: `minimal-ui`,
        icon: `src/images/carvengate-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
