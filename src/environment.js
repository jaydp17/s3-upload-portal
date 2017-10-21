'use strict';

// load environment variables from .env
require('dotenv').config();

exports.BASIC_AUTH = {
  username: process.env.BASIC_AUTH_USERNAME || 'someuser',
  password: process.env.BASIC_AUTH_PASSWORD || 'somepassword',
};

exports.S3 = {
  bucketName: process.env.S3_BUCKET_NAME || 'someBucket',
  acl: process.env.S3_OBJECT_ACL || 'public-read',
};

exports.AWS = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'xxx',
  secret: process.env.AWS_SECRET_ACCESS_KEY || 'yyy',
};
