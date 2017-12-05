const Base64Utils = require('../utils/base64-utils');
const FileStatus = require('../utils/file-status');

const uploadBuilder = require('../builders/upload-builder');
const uploadValidator = require('../validators/upload-validator');

const metadataBuilder = require('../builders/metadata-builder');
const metadataValidator = require('../validators/metadata-validator');

const uploadService = require('../services/upload-service');
const metadataService = require('../services/metadata-service');

const executeUpload = async (metadataWrapper, uploadWrapper) => {
  const createMetadataResult = await metadataService.createMetadata(metadataWrapper);
  uploadWrapper.uniqueId = createMetadataResult.uniqueId;

  try {
    await uploadService.upload(uploadWrapper);

    metadataWrapper.status = FileStatus.SUCCESS;
  } catch (err) {
    metadataWrapper.status = FileStatus.FAILED;
    throw err;
  } finally {
    await metadataService.updateStatus(metadataWrapper);
  }

  return createMetadataResult;
};

const upload = async (req, res) => {
  uploadValidator.validateUpload(req);

  const uploadResults = [];

  for (let index = 0; index < req.files.length; index++) {
    const file = req.files[index];

    const metadataWrapper = metadataBuilder.buildMetadataForUpload(file, req.body.expiry);

    const uploadWrapper = uploadBuilder.buildUploadWrapper(file);

    const uploadResult = await executeUpload(metadataWrapper, uploadWrapper);

    uploadResults.push(uploadResult);
  }

  res.status(200).json(uploadResults);
};

const uploadB64 = async (req, res) => {
  uploadValidator.validateUploadB64(req);

  const uploadResults = [];

  for (let index = 0; index < req.body.files.length; index++) {
    const file = req.body.files[index];

    const fileBuffer = Base64Utils.base64ToBinary(file.data);

    const metadataB64Wrapper = metadataBuilder.buildMetadataForUploadB64(file, fileBuffer.size, req.body.expiry);

    metadataValidator.validateMetadata(metadataB64Wrapper);

    const uploadB64Wrapper = uploadBuilder.buildUploadB64Wrapper(fileBuffer);

    const uploadB64Result = await executeUpload(metadataB64Wrapper, uploadB64Wrapper);

    uploadResults.push(uploadB64Result);
  }

  res.status(200).json(uploadResults);
};

module.exports = {
  upload,
  uploadB64,
};
