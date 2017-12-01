import axios from 'axios';
import {downloadUrl} from "../env";

export class DownloadService {

    static download(artifactId){
        return axios.get(downloadUrl.replace(':id', artifactId), {responseType: 'blob'});
    }

}