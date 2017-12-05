const FileStatus = require('../utils/file-status');

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
  mimeType: fileB64.mimeType,
  size,
  status: FileStatus.PENDING,
  expiry,
  creationTime: new Date(),
});

module.exports = {
  buildMetadataForUpload,
  buildMetadataForUploadB64,
};
