const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vuetify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: "apple-touch-startup-image", sizes: "1125x2436", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", href: "/apple-launch-1125x2436.png" },
      { rel: "apple-touch-startup-image", sizes: "750x1334", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-750x1334.png" },
      { rel: "apple-touch-startup-image", sizes: "1242x2208", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)", href: "/apple-launch-1242x2208.png" },
      { rel: "apple-touch-startup-image", sizes: "640x1136", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-640x1136.png" },
      { rel: "apple-touch-startup-image", sizes: "1536x2048", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-1536x2048.png" },
      { rel: "apple-touch-startup-image", sizes: "1668x2224", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-1668x2224.png" },
      { rel: "apple-touch-startup-image", sizes: "2048x2732", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", href: "/apple-launch-2048x2732.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },
  render: {
    bundleRenderer: {
      directives: {
        cww: function (vnode, dir) {
          const style = vnode.data.style || (vnode.data.style = {})
          style.backgroundColor = '#ff0016'
        }
      }
    }
  }
}
