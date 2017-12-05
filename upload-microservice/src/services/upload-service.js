const redisService = require('./redis-service');

const upload = async uploadWrapper => redisService.set(uploadWrapper.uniqueId, uploadWrapper.data);

module.exports = {
  upload,
};
