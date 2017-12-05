const HttpError = require('../errors/http-error');
const HttpStatus = require('http-status');

const validateMetadata = (metadataWrapper) => {
  const {
    name, mimeType, size, status, expiry, creationTime,
  } = metadataWrapper;

  if (!name) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File name is mandatory in metadata.');
  }

  if (!mimeType) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File mime type is mandatory in metadata.');
  }

  if (!size || size === 0) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File size is mandatory in metadata.');
  }

  if (!status) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File status is mandatory in metadata.');
  }

  if (!expiry) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File expiration is mandatory in metadata.');
  }

  if (!creationTime) {
    throw new HttpError(HttpStatus.INTERNAL_SERVER_ERROR, 'File creation time is mandatory in metadata.');
  }
};

module.exports = {
  validateMetadata,
};
