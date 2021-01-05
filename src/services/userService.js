import {getRequest, postRequest} from '../utils/ajax';

const baseUrl = 'http://localhost:8080/';
const authUrl = baseUrl + 'auth/';
const userUrl = baseUrl + 'user/';
const verificationUrl = baseUrl + 'verification';

export const login = (data, callback) => {
    const url = authUrl + 'login';
    postRequest(url, data, callback);
};

export const logout = (callback) => {
    const url = authUrl + 'logout';
    getRequest(url, undefined, callback);
};

export const sendVerification = (data, callback) => {
    const url = verificationUrl + 'send';
    postRequest(url, data, callback);
};

export const register = (data, callback) => {
    const url = userUrl + 'register';
    postRequest(url, data, callback);
};

export const getUserInfo = (data, callback) => {
    const url = userUrl + 'info';
    getRequest(url, data, callback);
};

export const saveUserInfo = (data, callback) => {
    const url = userUrl + 'info';
    postRequest(url, data, callback);
};

export const changePassword = (data, callback) => {
    const url = userUrl + 'password';
    postRequest(url, data, callback);
};

export const setAvatar = (data, callback) => {
    const url = baseUrl + 'avatar';
    postRequest(url, data, callback);
};

export const checkAuth = (data, callback) => {
    const url = authUrl + 'checkAuth';
    getRequest(url, data, callback);
};
