const redisService = require('./redis-service');

const upload = async ()=>{
    return await redisService.set('key', 'value');
}

module.exports = {
    upload
}