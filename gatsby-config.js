require("dotenv").config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Toronto Nepali Film Festival',
    description: 'Toronto Nepali Film Festival (TNFF) is a not for profit organization based in Toronto, Ontario. Partnering with organizations in Canada, Nepal and beyond, TNFF brings a festival of extraordinary Nepali films in Toronto and other cities. By featuring films of South Asia, specifically Nepal, TNFF intends to add a fresh dimension to the multi-layered diasporic narratives of Canada.',
    author:'tnff',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Toronto Nepali Film Festival',
        short_name: 'TNFF',
        start_url: '/',
        background_color: '#003049',
        theme_color: '#003049',
        displays: 'standalone',
        icon: 'src/assets/tnff_red.png'
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura',
        url: process.env.HASURA_GRAPHQL_URL,
      }
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/films`
    //   }
    // },
  ],
}
