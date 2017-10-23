const environment = require('./server/utils/environment');
const packageJSON = require('./package.json');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'S3 Upload Portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: packageJSON.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // TODO: remove font awesome
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.scss'],
  env: {
    OUTPUT_URL_PREFIX: environment.output.urlPrefix,
    PACKAGE_VERSION: packageJSON.version,
    LICENSE: packageJSON.license,
    GITHUB_PAGE: packageJSON.homepage,
  },
  /*
  ** Add axios globally
  */
  build: {
    extractCSS: true,
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
