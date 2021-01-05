import {postRequest} from '../utils/ajax';

const baseUrl = 'http://localhost:8080/';

export const changePassword = (data, callback) => {
    const url = baseUrl + 'userPassword';
    postRequest(url, data, callback);
};

export const changeUserstate = (data, callback) => {
    const url = baseUrl + 'userState';
    postRequest(url, data, callback);
};

export const changeUserType = (data, callback) => {
    const url = baseUrl + 'userType';
    postRequest(url, data, callback);
};
