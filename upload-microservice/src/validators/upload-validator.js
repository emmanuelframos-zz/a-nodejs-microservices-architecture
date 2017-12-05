const HttpError = require('../errors/http-error');
const HttpStatus = require('http-status');

const validateUpload = (req) => {
  if (!req.files || req.files.length === 0) {
    throw new HttpError(HttpStatus.BAD_REQUEST, 'File list cannot be empty.');
  }

  if (!req.body.expiry) {
    throw new HttpError(HttpStatus.BAD_REQUEST, 'Expiration date is mandatory.');
  }

  for (let index = 0; index < req.files.length; index++) {
    const file = req.files[index];

    if (!file.originalname) {
      throw new HttpError(HttpStatus.BAD_REQUEST, 'File name is mandatory.');
    }

    if (!file.buffer) {
      throw new HttpError(HttpStatus.BAD_REQUEST, `File binary stream in b64 for file ${file.name} is mandatory.`);
    }

    if (!file.mimetype) {
      throw new HttpError(HttpStatus.BAD_REQUEST, `No mime type found for file ${file.name}.`);
    }
  }
};

const validateUploadB64 = (req) => {
  if (!req.body.files || req.body.files.length === 0) {
    throw new HttpError(HttpStatus.BAD_REQUEST, 'File list cannot be empty.');
  }

  for (let index = 0; index < req.body.files.length; index++) {
    const file = req.body.files[index];

    if (!file.name) {
      throw new HttpError(HttpStatus.BAD_REQUEST, 'File name is mandatory.');
    }

    if (!file.data) {
      throw new HttpError(HttpStatus.BAD_REQUEST, `File binary stream in b64 for file ${file.name} is mandatory.`);
    }

    if (!file.expiry) {
      throw new HttpError(HttpStatus.BAD_REQUEST, `Expiration date for file ${file.name} is mandatory.`);
    }
  }
};

module.exports = {
  validateUpload,
  validateUploadB64,
};
