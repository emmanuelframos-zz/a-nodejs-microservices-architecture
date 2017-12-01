import axios from "axios";
import {authTokenCookieName, signInRoute} from "./env";
import {deleteCookie} from "./utils/cookieUtils";

export default function register() {

    axios.interceptors.request.use(function (config) {
        config.withCredentials = true;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const { status } = error.response;

        if (status === 401 || status === 403){
            deleteCookie(authTokenCookieName);
            window.location = signInRoute;
        };
        return Promise.reject(error);
    });
};



