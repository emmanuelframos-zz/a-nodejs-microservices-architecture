const express = require('express');

const router = express.Router();

const metadataController = require('../controllers/metadata-controller');

router
    .route('metadata')
    .post(metadataController.save);