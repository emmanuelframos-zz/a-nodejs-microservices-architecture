const redis = require('../../config/redis');

const set = async (fileName, fileData) => redis.client.set(fileName, fileData);

module.exports = {
  set,
};
