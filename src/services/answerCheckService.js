import {getRequest, putRequest} from '../utils/ajax';

import {answerUrl} from '../utils/config';


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
