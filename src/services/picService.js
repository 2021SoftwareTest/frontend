import {getRequest} from "../utils/ajax";
import {picUrl} from "../utils/config";

export const sendPic = (data, callback) => {
    getRequest(picUrl, data, callback);
};
