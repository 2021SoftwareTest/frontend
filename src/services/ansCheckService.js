import {getRequest, postRequest, putRequest} from '../utils/ajax';
import {answerUrl} from '../utils/config';

export const getStuAnswerByAnsId = (data, callback) => {
    const url = answerUrl + 'get';
    getRequest(url, data, callback);
};

export const getStuCheckByCheckId = (data, callback) => {
    const url = answerUrl + 'checkdetail';
    getRequest(url, data, callback);
};

export const submitStuAns = (data, callback) => {
    const url = answerUrl + 'new';
    putRequest(url, data, callback);
};
