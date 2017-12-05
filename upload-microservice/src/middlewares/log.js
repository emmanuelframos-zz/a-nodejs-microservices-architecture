const app = require('../app');

const morgan = require('morgan');

app.use(morgan(':method :url :response-time'));

const winston = require('winston');

const console = new (winston.transports.Console)({
  colorize: 'true',
  prettyPrint: true,
  handleExceptions: true,
  json: false,
  level: 'info',
});

const dailyRotateFile = new (require('winston-daily-rotate-file'))({
  filename: './log',
  datePattern: 'yyyy-MM-dd.',
  handleExceptions: true,
  prepend: true,
  maxDays: 7,
  json: false,
  level: 'info',
});

winston.configure({
  transports: [console, dailyRotateFile],
});
