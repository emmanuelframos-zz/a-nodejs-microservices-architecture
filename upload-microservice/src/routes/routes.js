const express = require('express');
const router = express.Router();

const constants = require('../utils/constants')

const app = require('../app');
app.use(constants.MICROSERVICE_BASE_URL, router);

const multipartHandler = require('../utils/multer');

const uploadController = require('../controllers/upload-controller');

router
    .route('/upload')
    .post(multipartHandler.array('files'), uploadController.upload);