module.exports = {
  siteMetadata: {
    title: `New Vision UK`,
    description: `The only content library with the Local Church in mind.`,
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
        icon: `src/images/logo512.png`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://store.us10.list-manage.com/subscribe/post?u=71fa804271a5299c4b22090ee&amp;id=8f79914c1a"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159295663-1",
        head: true
      }
    }
  ]
}
