require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `NesaMedia`,
    // Default title of the page
    siteTitleAlt: `Nesa Media`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Nesa Media - Shërbime Digjitale`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://nesa.media`,
    // Used for SEO
    siteDescription: `Zhvillim & Kreativitet`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner2.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        name: `NesaMedia`,
        short_name: `Nesa-Media`,
        description: `Shërbime digjitale`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#ee3133`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NesaMedia`,
        short_name: `Nesa-Media`,
        description: `Shërbime digjitale`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#ee3133`,
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
