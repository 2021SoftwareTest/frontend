import {getRequest, putRequest} from '../utils/ajax';

const baseUrl = 'http://localhost:8080/';
const answerUrl = baseUrl + 'answer';

export const putAnswer = (data, callback) => {
    const url = answerUrl + 'new';
    putRequest(url, data, callback);
};

export const getAnswer = (data, callback) => {
    const url = answerUrl + 'get';
    getRequest(url, data, callback);
};
export const getCheckDetail = (data, callback) => {
    const url = answerUrl + 'checkdetail';
    getRequest(url, data, callback);
};
