const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'ArtistBlog',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        styles: path.join(__dirname, 'src/styles'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        context: path.join(__dirname, 'src/context'),
        page: path.join(__dirname, 'src/page'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'SWAPI',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'swapi',
        // Url to query from
        url:
          'https://api-eu-central-1.graphcms.com/v2/cknbq2upgeayk01z8f9zabj0i/master',
      },
    },
  ],
};
