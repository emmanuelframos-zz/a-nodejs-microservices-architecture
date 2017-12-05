const env = require('./environment');

const options = {
  port: env.upload_redis_port,
  host: env.upload_redis_host,
  return_buffers: true,
};

const redis = require('redis');

const client = redis.createClient(options);

module.exports = {
  client,
};
