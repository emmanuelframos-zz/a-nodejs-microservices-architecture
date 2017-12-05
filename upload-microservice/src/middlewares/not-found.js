const app = require('../app');

app.use((req, res, next) => {
  const err = new Error(`Route Not Found: [${req.method}] ${req.path}`);
  err.status = 404;
  next(err);
});
