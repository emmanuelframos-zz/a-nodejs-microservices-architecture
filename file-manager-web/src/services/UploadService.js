import axios from 'axios';

import {uploadBinaryUrl} from "../env";

export class UploadService {

    static uploadBinary(upload){

        const formData = new FormData();

        for (let index=0; index < upload.files.length; index++)
            formData.append('files', upload.files[index]);

        formData.append('expiry', upload.expiry);

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };

        return axios.post(uploadBinaryUrl, formData, config);
    }
}