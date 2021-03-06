module.exports = {
  siteMetadata: {
    author: `Ricky de Laveaga`,
    blogTitle: `way as void`,
    description: `way as void`,
    github: `rdela/voidcluster`,
    siteUrl: `https://voidcluster.com/`,
    title: `voidcluster`,
    twitter: `voidcluster`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `voidcluster`,
        short_name: `voidcluster`,
        icons: [
          {
            src: `/favicons/voidcluster-i-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/voidcluster-i-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#005864`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
