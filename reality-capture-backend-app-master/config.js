'use strict'

module.exports = {
  // Autodesk Forge settings
  REALITY_CAPTURE_BASE_ENDPOINT: 'https://developer.api.autodesk.com/photo-to-3d/v1',
  SCOPES: ['bucket:create', 'bucket:read', 'data:create', 'data:read', 'data:write'],
  // SSL/TLS settings
  TLS_VERSION: 'TLSv1_2_method',
  // Redis settings
  REDIS_ENDPOINT: 'redis-17828.c99.us-east-1-4.ec2.cloud.redislabs.com',
  REDIS_PORT: 17828,
  // Amazon settings
  AWS_LAMBDA_BASE_ENDPOINT: 'https://x06sbhupii.execute-api.us-east-1.amazonaws.com/demo',
  // Autodesk Recap settings
  // Available formats are rcm (Autodesk Recap Photo Mesh),
  // rcs (Autodesk Recap Point Cloud) and obj (Wavefront object).
  FORMAT: 'obj',
  SCENENAME: 'reality-capture-mobile-app-test-2',
  SCENETYPE: 'object',
  SCENECALLBACK: '/recap/scene/callback'
}
