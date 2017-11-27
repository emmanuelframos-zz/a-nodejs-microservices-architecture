const config = {
  dev: {
    mongo_metadata_url: process.env.MONGO_METADATA_URL || 'mongodb://mongodb/development',
    port: process.env.PORT || 3000
  },
  test: {
    mongo_metadata_url: process.env.MONGO_METADATA_URL || 'mongodb://mongodb/test',
    port: process.env.PORT || 3000
  }

};

const env = process.env.NODE_ENV;

module.exports = config[env];
