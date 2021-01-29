require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Nesa Media`,
    siteTitleAlt: `Nesa Media`,
    siteHeadline: `Agjensi për marketing digjital`,
    siteUrl: `https://nesamedia2020.netlify.app/`,
    siteDescription: `Zhvillim & Kreativitet`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@pixendrit`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: { },
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
        name: `Nesa Media`,
        short_name: `NesaMedia`,
        description: `Agjensi për marketing digjital në Ferizaj`,
        start_url: `/`,
        background_color: `#001123`,
        theme_color: `#bbffe4`,
        display: `standalone`,
        icons: [
          {
            src: `static/android-chrome.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/android-chrome512.png`,
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
