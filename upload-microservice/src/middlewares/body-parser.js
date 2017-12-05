const app = require('../app');

const bodyParser = require('body-parser');

const optionsRaw = {
  inflate: true,
  limit: '2048kb',
  type: 'application/octet-stream',
};

const optionsJson = {
  inflate: true,
  limit: '2048kb',
  type: 'application/json',
};

app.use(bodyParser.json(optionsJson));
app.use(bodyParser.raw(optionsRaw));
