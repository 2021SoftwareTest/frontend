import { message } from 'antd';

import {  getRequest, postRequest, putRequest} from '../utils/ajax';
import { history } from '../utils/history';

const baseUrl = 'http://localhost:8080/';
const authUrl = baseUrl + 'auth/';
const userUrl = baseUrl + 'user/';
const checkUrl = baseUrl + 'check/';

export const login = (data) => {
  const url = authUrl + 'login';
 // TODO
  const callback = (data) => {
    if (data.status >= 0) {
      if (data.data.userType === -1) {
        message.error('您的账号已经被禁用！');
      } else {
        localStorage.setItem('user', JSON.stringify(data.data));
        history.push('/');
        message.success(data.msg);
      }
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, data, callback);
};

export const logout = () => {
  const url = authUrl + 'logout';

  const callback = (data) => {
    if (data.status >= 0) {
      localStorage.removeItem('user');
      history.push('/');
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, {}, callback);
};


export const register = (data) => {
  const url = userUrl + 'register';
  // TODO
  const callback = (data) => {
    if (data.status >= 0) {
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  putRequest(url, data, callback);
};

export const getUserInfo = (data, callback) => {
  const url = userUrl + 'info';
  getRequest(url, data, callback);
};

export const checkPassword = (data, callback) => {
  const url = checkUrl + 'password';
  postRequest(url, data, callback);
};

export const checkPhone = (data, callback) => {
  const url = checkUrl + 'phone';
  postRequest(url, data, callback);
};

export const checkEmail = (data, callback) => {
  const url = checkUrl + 'email';
  postRequest(url, data, callback);
};
