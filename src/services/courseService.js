import { getRequest, putRequest } from '../utils/ajax';

const baseUrl = 'http://localhost:8080/';
const courseUrl = baseUrl + 'course/';

export const getCourseList = (data, callback) => {
  const url = courseUrl + 'mylist';
  getRequest(url, data, callback);
};

export const putNewCourse = (data, callback) => {
  const url = courseUrl + 'newcourse';
  putRequest(url, data, callback);
};

export const getStudent = (data, callback) => {
  const url = courseUrl + 'student';
  getRequest(url, data, callback);
};
