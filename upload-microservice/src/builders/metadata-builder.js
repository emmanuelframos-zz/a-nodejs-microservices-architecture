const FileStatus = require('../utils/file-status');
const Base64Utils = require('../utils/b64-utils');

const buildMetadataForUpload = (file, expiry) => ({
  name: file.originalName,
  mimeType: file.mimetype,
  size: file.buffer.length,
  status: FileStatus.PENDING,
  expiry,
  creationTime: new Date(),
});

const buildMetadataForUploadB64 = (fileB64, size, expiry) => ({
  name: fileB64.name,
  mimeType: Base64Utils.getContentType(fileB64),
  size,
  status: FileStatus.PENDING,
  expiry,
  creationTime: new Date(),
});

module.exports = {
  buildMetadataForUpload,
  buildMetadataForUploadB64,
};
