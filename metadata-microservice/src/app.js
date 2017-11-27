const express = require('express');

const app = express();

const security = require('../config/security');

module.exports = app;

require('./middlewares/helmet');
require('./middlewares/cors');
require('./middlewares/body-parser');
require('./middlewares/log');
require('./middlewares/not-found');
require('./routes/routes');

module.exports = async ()=>{
    await security.securityCheck();
    return app;
}