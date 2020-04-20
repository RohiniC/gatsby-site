module.exports = {
  siteMetadata: {
    title: 'Profile',
    description: 'Profile page',
    author: 'Rohini Chellapandian',
  },
  pathPrefix: `${__dirname}/Profile`,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                'story-text': {
                  classes: 'story-text',
                },
                direct: {
                  classes: 'direct',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                'sub-section': {
                  classes: 'sub-section',
                },
              },
            },
          }, {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'favicon',
        short_name: 'favicon',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {

        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
