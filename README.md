# s3-upload-portal
[![GitHub package version](https://img.shields.io/github/package-json/v/jaydp17/s3-upload-portal.svg)](https://github.com/jaydp17/s3-upload-portal)
[![license](https://img.shields.io/github/license/jaydp17/s3-upload-portal.svg)](https://github.com/jaydp17/s3-upload-portal)

A simple (configurable) Vue.js web-app that allows uploading files to S3.

## :sparkles: Features
- HTTP Basic Auth
- S3 ACL
- Prefix generated URL
- Stores Past Uploads `// Coming Soon`
- File Type Restrictions `// Coming Soon`
- Optimize Image before uploading `// Not sure how to do w/o sending image to server`

## :construction_worker: Build Setup

``` sh
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## :bug: Known Bugs
- No loader/progress while uploading

## :heart: Credits
Major dependencies:
- [Vue.js <img src="https://vuejs.org/images/logo.png" height="15px"/>](https://vuejs.org/) 
- [Nuxt.js <img src="https://avatars2.githubusercontent.com/u/23360933?s=200&v=4" height="20px" />](https://nuxtjs.org/)

Design Inspiration (because I'm no designer):
- [Mozilla Send](https://send.firefox.com)

## :mortar_board: License
[MIT](http://webpro.mit-license.org/)
