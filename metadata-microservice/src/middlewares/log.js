const app = require('../app');

const morgan = require('morgan');
app.use(morgan(':method :url :response-time'));

const log = require('winston');
log.level = 'debug';
log.loggers.add('default', {
    console: {
        colorize: 'true',
        handleExceptions: true,
        json: false,
        level: 'debug',
        label: 'default'
    }
});