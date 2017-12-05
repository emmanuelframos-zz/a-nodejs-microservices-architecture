const express = require('express');

const app = express();

module.exports = app;

require('./middlewares/helmet');
require('./middlewares/cors');
require('./middlewares/body-parser');
require('./middlewares/log');
require('./utils/multer');
require('./routes/routes');
require('./middlewares/not-found');

module.exports = async () => app;
