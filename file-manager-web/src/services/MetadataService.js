import axios from 'axios';
import {getAllMetadataUrl, getMetadataUrl, patchMetadataUrl, putMetadataUrl, saveMetadataUrl} from "../env";

export class MetadataService {

    static getMetadata(id){
        return axios.get(getMetadataUrl.replace(':id', id));
    }

    static getAllMetadata(){
        return axios.get(getAllMetadataUrl, {withCredentials: true});
    }

    static saveMetadata(metadata){
        return axios.post(saveMetadataUrl, metadata);
    }

    static updateWholeMetadata(metadata){
        return axios.put(`${putMetadataUrl}${metadata.uniqueId}`, metadata);
    }

    static updatePartialMetadata(metadata){
        return axios.patch(`${patchMetadataUrl}${metadata.uniqueId}`, metadata);
    }
}