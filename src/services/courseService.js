import { message } from 'antd';

import { postRequest, putRequest } from '../utils/ajax';

const baseUrl = 'http://localhost:8080/';
const courseUrl = baseUrl + 'course/';


export const getCourseList = (data) => {
  const url = courseUrl + 'mylist';
  // TODO
  const callback = (data) => {
    // eslint-disable-next-line no-empty
    if (data.status >= 0) {
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, data, callback);
};

export const putNewCourse = (data) => {
  const url = courseUrl + 'mylist';
  // TODO
  const callback = (data) => {
    // eslint-disable-next-line no-empty
    if (data.status >= 0) {
    } else {
      message.error(data.msg);
    }
  };
  putRequest(url, data, callback);
};

