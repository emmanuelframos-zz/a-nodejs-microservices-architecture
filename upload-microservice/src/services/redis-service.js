const redis = require('../../config/redis');

const set = async(key, value)=>{
    return await redis.client.set(key, value);
}

module.exports = {
    set
}