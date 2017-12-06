const redisService = require('./redis-service');

const upload = async (key, value) => redisService.set(key, value);

module.exports = {
  upload,
};
