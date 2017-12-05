const buildUploadWrapper = (file) => {
  const uploadWrapper = {
    data: file.buffer,
  };

  return uploadWrapper;
};

const buildUploadB64Wrapper = (fileBuffer) => {
  const uploadB64Wrapper = {
    data: fileBuffer,
  };

  return uploadB64Wrapper;
};

module.exports = {
  buildUploadWrapper,
  buildUploadB64Wrapper,
};
