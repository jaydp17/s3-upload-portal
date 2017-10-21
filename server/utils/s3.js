import { promisify } from 'util';
import * as AWS from 'aws-sdk';

import environment from './environment';

// const util = require('util');
// const AWS = require('aws-sdk');
// const environment = require('./environment');

const s3 = new AWS.S3();
const getSignedUrl = promisify(s3.getSignedUrl).bind(s3);

// eslint-disable-next-line import/prefer-default-export
export function getUploadUrl(name, contentType) {
  console.log({ name, contentType });
  const s3Params = {
    Bucket: environment.S3.bucketName,
    Key: name,
    ContentType: contentType,
    ACL: environment.S3.acl,
  };

  return getSignedUrl('putObject', s3Params);
}
