import {getRequest} from '../utils/ajax';
import {messageUrl} from '../utils/config';


export const getMessageByUserId = (data, callback) => {
    const url = messageUrl + 'userId';
    getRequest(url, data, callback);
};

export const getMessageByCourseId = (data, callback) => {
    const url = messageUrl + 'courseId';
    getRequest(url, data, callback);
};
