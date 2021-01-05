import {getRequest} from '../utils/ajax';
import {baseUrl} from '../utils/config';
const messageUrl = baseUrl + 'message';

export const getMessageByUserId = (data, callback) => {
    const url = messageUrl + 'getMessageByUserId';
    getRequest(url, data, callback);
};

export const getMessageByCourseId = (data, callback) => {
    const url = messageUrl + 'getCourseByUserId';
    getRequest(url, data, callback);
};
