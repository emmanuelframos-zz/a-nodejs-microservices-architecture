const uploadService = require('../services/upload-service');

const upload = async (req, res)=>{
    await uploadService.upload();
    res.status(200).send();
}

module.exports = {
    upload:upload  
} 