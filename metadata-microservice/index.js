const logger = require('winston');

const setupApp = require('./src/app');

const config = require('./config/environment');

setupApp()
    .then((app) => {
        app.listen(config.port, () => {
            logger.info(`Metadata Microservice running on port ${config.port}`)
        });
    })
    .catch((error) => {
        logger.error(error);
        process.exit(1);
    });