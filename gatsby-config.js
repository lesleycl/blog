module.exports = {
  siteMetadata: {
    title: `Li Chai's Blog`,
  },
  pathPrefix: `/blog`,
  plugins: [
    // modify head tag
    `gatsby-plugin-react-helmet`,
    // client-side pushState to avoid refresh
    `gatsby-plugin-catch-links`,
    // locate source files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    // transform .md into html
    `gatsby-transformer-remark`,
  ],
};
