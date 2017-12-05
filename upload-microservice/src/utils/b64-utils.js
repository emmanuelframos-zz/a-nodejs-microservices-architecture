const getContentType = fileB64 => fileB64.substring('data:'.length, fileB64.indexOf(';base64'));

const base64ToBinary = data => Buffer.from(data, 'base64');

module.exports = {
  getContentType,
  base64ToBinary,
};
