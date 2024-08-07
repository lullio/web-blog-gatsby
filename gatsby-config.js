require('dotenv').config() // já vai conseguir ler o arquivo .env e configurar normal
const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `Felipe Lullio`,
    position: `Web Analytics`,
    description: `Aprenda sobre Google Analytics 4, Google Tag Manager, Google Looker Studio, Google Apps Script, PowerBI e muito mais. `,
    author: `@felipelullio`,
    siteUrl: `https://blog.lullio.com.br`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Add your gatsby-remark-* plugins here
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-WSVDN5KL",
        
              // Include GTM in development.
              //
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: true,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },
        
              // Specify optional GTM environment details.
              // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
              // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
              // dataLayerName: "YOUR_DATA_LAYER_NAME",
        
              // Name of the event that is triggered
              // on every Gatsby route change.
              //
              // Defaults to gatsby-route-change
              routeChangeEventName: "virtualPageView",
              // Defaults to false
              enableWebVitalsTracking: true,
              // Defaults to https://www.googletagmanager.com
              // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
              // // Defaults to gtm.js
              // selfHostedPath: "YOUR_SELF_HOSTED_PATH",
            },
          },
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-G4WHWMNQ6V", // Google Analytics / GA
                "G-SQBZ6TX9J7", // Google Ads / Adwords / AW // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
              ],
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Defaults to https://www.googletagmanager.com
                // origin: "YOUR_SELF_HOSTED_ORIGIN",
                // Delays processing pageview events on route update (in milliseconds)
                delayOnRouteUpdate: 0,
              },
            },
          },
          // {
          //   resolve: "gatsby-plugin-google-tagmanager-timeout",
          //   options: {
          //     id: "GTM-123456",
        
          //     // Include GTM in development.
          //     // Defaults to false meaning GTM will only be loaded in production.
          //     includeInDevelopment: true,
          //     timeout: 0, // default value is 1000ms
          //     // datalayer to be set before GTM is loaded
          //     // should be an object or a function that is executed in the browser
          //     // Defaults to null
          //     defaultDataLayer: { platform: "gatsby" },
        
          //     // // Specify optional GTM environment details.
          //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
          //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
          //     // dataLayerName: "YOUR_DATA_LAYER_NAME",
          //     routeChangeEventName: "xxsos",
          //   },
          // },

          // `gatsby-remark-autolink-headers`,
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
        // Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines (default: false)
        // It's not advised to set this to "true" and this option will likely be removed in the future
        jsFrontmatterEngine: false,
      },  
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `App Blog Analytics - Felipe Lullio`,
        short_name: `App Analytics Felipe Lullio`,
        description: `Blog do Felipe Lullio, aprenda sobre o mundo de web analytics entendendo sobre as ferramentas Google, criação de relatórios, dashboards e análise de dados.`,
        start_url: `/`,
        background_color: `#030518`,
        theme_color: `#030518`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nerdanalytics.com.br`, // Substitua pelo seu domínio
        stripQueryString: true, // Se deseja remover parâmetros de busca da URL canônica
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `analytics-nerd`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    // `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-decap-cms`
  ],
}
