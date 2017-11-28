const uploadService = require('../services/upload-service');

const upload = async (req, res)=>{
    const files = req.files;
    const fileId = await uploadService.upload();
    res.status(200).send({fileId:fileId});
}

module.exports = {
    upload:upload  
} 