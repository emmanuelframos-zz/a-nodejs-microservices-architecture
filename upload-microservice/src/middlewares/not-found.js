const app = require('../app');

app.use((req, res, next) => {
    let err = new Error(`Route Not Found: [${req.method}] ${req.path}`);
    err.status = 404;
    next(err);
});