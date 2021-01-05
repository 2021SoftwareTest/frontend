import {getRequest, postRequest, putRequest} from '../utils/ajax';

import {homeworkUrl} from '../utils/config';


export const createHomework = (data, callback) => {
    const url = homeworkUrl + 'create';
    putRequest(url, data, callback);
};

export const editHomework = (data, callback) => {
    const url = homeworkUrl + 'update';
    postRequest(url, data, callback);
};

export const getHomeworkDetail = (data, callback) => {
    const url = homeworkUrl + 'detail';
    getRequest(url, data, callback);
};

export const getHomeworkSituation = (data, callback) => {
    const url = homeworkUrl + 'cmtlist';
    getRequest(url, data, callback);
};

export const correctHomework = (data, callback) => {
    const url = homeworkUrl + 'correct';
    putRequest(url, data, callback);
};

export const postRightAnswer = (data, callback) => {
    const url = homeworkUrl + 'postAnswer';
    putRequest(url, data, callback);
};

export const publishRightAnswer = (data, callback) => {
    const url = homeworkUrl + 'publishAnswer';
    postRequest(url, data, callback);
};

export const publishCheck = (data, callback) => {
    const url = homeworkUrl + 'publishCheck';
    postRequest(url, data, callback);
};


