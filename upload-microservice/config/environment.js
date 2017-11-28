const config = {
    development: {
        upload_redis_host: process.env.UPLOAD_REDIS_HOST || 'development-upload-redis',
        upload_redis_port: process.env.UPLOAD_REDIS_PORT || 6379,
        port: process.env.PORT || 3000
    },
    test: {
        upload_redis_host: process.env.UPLOAD_REDIS_HOST || 'test-upload-redis',
        upload_redis_port: process.env.UPLOAD_REDIS_PORT || 6379,
        port: process.env.PORT || 3000
    }
};

const env = process.env.NODE_ENV;

module.exports = config[env];
