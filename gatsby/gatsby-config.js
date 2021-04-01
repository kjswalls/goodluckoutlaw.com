module.exports = {
  siteMetadata: {
    title: `Good Luck Outlaw`,
    description: `Internet home of musician and creator Kirby Walls`,
    author: `@goodluckoutlaw`,
    siteUrl: `https://goodluckoutlaw.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-MT54Q45BX5",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
