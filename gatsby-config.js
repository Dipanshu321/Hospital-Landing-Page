/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
*/
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Source Sans Pro`,
            file: `https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap rel="stylesheet">`,
          },
        ],
      },
      // resolve: `gatsby-source-filesystem`,
      // options: {
      //   name: `images`,
      //   path: `${__dirname}/src/images/`,
      // },
    },
  ]
}