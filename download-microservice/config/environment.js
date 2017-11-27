const config = {
  dev: {
    memcached_upload_url: process.env.MEMCACHED_UPLOAD_URL || 'memcached://memecached/development',
    port: process.env.PORT || 3000
  },
  test: {
    memcached_upload_url: process.env.MEMCACHED_UPLOAD_URL || 'memcached://memecached/test',
    port: process.env.PORT || 3000
  }

};

const env = process.env.NODE_ENV;

module.exports = config[env];
