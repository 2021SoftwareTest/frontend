import {getRequest, putRequest, postRequest} from '../utils/ajax';

import {courseUrl} from '../utils/config';

export const putNewCourse = (data, callback) => {
    const url = courseUrl + 'newcourse';
    putRequest(url, data, callback);
};

export const editCourse = (data, callback) => {
    const url = courseUrl + 'edit';
    postRequest(url, data, callback);
};

export const getCourseList = (data, callback) => {
    const url = courseUrl + 'mylist';
    getRequest(url, data, callback);
};

export const getCourseDetail = (data, callback) => {
    const url = courseUrl + 'detail';
    getRequest(url, data, callback);
};

export const getCourseHwlist = (data, callback) => {
    const url = courseUrl + 'hwlist';
    getRequest(url, data, callback);
};



export const deleteCourse = (data, callback) => {
    const url = courseUrl + 'delete';
    getRequest(url, data, callback);
};

export const getCourseUser = (data, callback) => {
    const url = courseUrl + 'student';
    getRequest(url, data, callback);
};

export const getCourseNotInUser = (data, callback) => {
    const url = courseUrl + 'nostu';
    getRequest(url, data, callback);
};

export const deleteCourseUser = (data, callback) => {
    const url = courseUrl + 'delstu';
    postRequest(url, data, callback);
};

export const addCourseUser = (data, callback) => {
    const url = courseUrl + 'students';
    postRequest(url, data, callback);
};

export const chooseCourse = (data, callback) => {
    const url = courseUrl + 'course';
    postRequest(url, data, callback);
};

export const getCourseMessage = (data, callback) => {
    const url = courseUrl + 'message';
    getRequest(url, data, callback);
};
