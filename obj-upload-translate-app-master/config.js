'use strict'

module.exports = {
  // Autodesk Forge settings
  DERIVATIVE_BASE_ENDPOINT: 'https://developer.api.autodesk.com/modelderivative/v2',
  OSS_BASE_ENDPOINT: 'https://developer.api.autodesk.com/oss/v2',
  STORAGE_BASE_ENDPOINT: 'https://developer.api.autodesk.com/data/v1',
  SCOPES: ['bucket:create', 'bucket:read', 'data:create', 'data:read', 'data:write'],
  // SSL / TLS settings
  TLS_VERSION: 'TLSv1_2_method',
  // Redis settings
  REDIS_ENDPOINT: 'redis-17828.c99.us-east-1-4.ec2.cloud.redislabs.com',
  REDIS_PORT: 17828,
  // Autodesk Data Management settings
  BUCKET_KEY: 'reality-capture-test-sbs',
  RECAP_OUTPUT_FILE_PATH: '/tmp/reality-capture-sbs.zip',
  BUBBLES_OUTPUT_DIR: '/tmp/derivativestest',
  BUBBLES_FILE_PATH: '/tmp/derivativestest.zip',
  // Amazon settings
  AWS_S3_BASE_ENDPOINT: 'https://s3.amazonaws.com',
  AWS_S3_BUCKET: 'reality-capture-test-pictures'
}
