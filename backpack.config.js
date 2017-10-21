module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, options, webpack) => {
    // eslint-disable-next-line no-param-reassign
    config.entry.main = './server/index.js';
    return config;
  },
};
