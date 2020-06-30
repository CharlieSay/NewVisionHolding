module.exports = {
  siteMetadata: {
    title: `New Vision UK`,
    description: `The only content library with the UK Church in mind.`,
    author: `@newvision.uk`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#141414`,
        icon: `src/images/logo512.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "//mc.us10.list-manage.com/signup-form/subscribe?u=71fa804271a5299c4b22090ee&id=001a52e1f0"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159295663-1",
        head: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
