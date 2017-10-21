const path = require('path');
const express = require('express');
const basicAuth = require('express-basic-auth');

const environment = require('./environment');
const s3 = require('./s3');

const app = express();

app.use(
  basicAuth({
    users: { [environment.BASIC_AUTH.username]: environment.BASIC_AUTH.password },
    challenge: true,
  }),
);

const publicFolder = path.join(__dirname, '../public');
express.static(publicFolder);

app.get('/', (req, res) => {
  res.sendFile(`${publicFolder}/index.html`);
});

app.get('/sign-s3', async (req, res) => {
  const { fileName, fileType } = req.query;

  if (!fileName) {
    return res.status(400).json({ error: 'fileName query param is required' });
  }
  if (!fileType) {
    return res.status(400).json({ error: 'fileType query param is required' });
  }

  const signedUrl = await s3.getUploadUrl(fileName, fileType);
  return res.json({ signedUrl });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
