'use strict';

const express = require('express');
const basicAuth = require('express-basic-auth');

const environment = require('./environment');

const app = express();

app.use(
  basicAuth({
    users: { [environment.BASIC_AUTH.username]: environment.BASIC_AUTH.password },
    challenge: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
