const config = {
  dev: {
    metadata_microservice_url: process.env.METADATA_MICROSERVICE_URL || 'http://metadata-microservice:3001',
    port: process.env.PORT || 3000
  },
  test: {
    metadata_microservice_url: process.env.METADATA_MICROSERVICE_URL || 'http://metadata-microservice:3001',
    port: process.env.PORT || 3000
  }

};

const env = process.env.NODE_ENV;

module.exports = config[env];
