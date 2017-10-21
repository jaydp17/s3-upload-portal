import * as axios from 'axios';

const options = {};
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;
  // eslint-disable-next-line global-require
  options.auth = require('../server/utils/environment').BASIC_AUTH;
}

export default axios.create(options);
