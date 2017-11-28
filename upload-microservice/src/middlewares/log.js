const app = require('../app');

const morgan = require('morgan');
app.use(morgan(':method :url :response-time'));

const winston = require('winston');

const console = new (winston.transports.Console)({
    colorize: 'true',
    handleExceptions: true,
    json: false,
    level: 'info'
});

const dailyRotateFile = new (require('winston-daily-rotate-file'))({
    filename: './log',
    datePattern: 'yyyy-MM-dd.',
    json: false,
    prepend: true,
    level: 'info'
});

winston.configure({
    transports: [ console, dailyRotateFile ]
});
