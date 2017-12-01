import axios from 'axios';
import { authUrl } from '../env';
import { getCookie, deleteCookie  } from "../utils/cookieUtils";
import { authTokenCookieName, signInRoute } from "../env";

export class AuthService {

    static doLogin(credentials){

        const config = {
            auth: {
                username: credentials.username,
                password: credentials.password
            }
        };

        return axios.get(authUrl, config);
    }

    static doLogout(){
        deleteCookie(authTokenCookieName);
        window.location = signInRoute;
    }

    static checkAuthentication(){
        if (!getCookie(authTokenCookieName)){
            window.location = signInRoute;
        }
    }
};