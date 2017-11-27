const express = require('express');

const router = express.Router();

const downloadController = require('../controllers/download-controller');

router
    .route('download')
    .post(downloadController.download);