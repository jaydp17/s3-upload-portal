const { resolve } = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'no-param-reassign': ['off'],
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              static: resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
              '~static': resolve(__dirname, 'static'),
              assets: resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components'),
            },
          },
        },
      },
    },
  },
};
