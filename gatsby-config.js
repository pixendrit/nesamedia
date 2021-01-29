require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Nesa Media`,
    siteTitleAlt: `Nesa Media`,
    siteHeadline: `Agjensi për marketing digjital`,
    siteUrl: `https://nesa.media`,
    siteDescription: `Zhvillim & Kreativitet`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@lekoarts_de`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vfddgfdg`,
        short_name: `ngfnbnbbn`,
        description: `oha`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#e63946`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
