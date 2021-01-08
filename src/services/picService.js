import {getRequest} from "../utils/ajax";
import {picUrl} from "../utils/config";

export const sendPic = (data, callback) => {
    const url = picUrl + 'clear';
    getRequest(url, data, callback);
};

export const checkPic = (data, callback) => {
    const url = picUrl + 'check';
    getRequest(url, data, callback);
};
