import { message } from 'antd';

import {  postRequest } from '../utils/ajax';
import { history } from '../utils/history';

const baseUrl = 'http://localhost:8080/';
const authUrl = baseUrl + 'auth';
const userUrl = baseUrl + 'user';

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
      localStorage.setItem('user', JSON.stringify(data.data));
      history.push('/');
      message.success(data.msg);
    } else {
      message.error(data.msg);
    }
  };
  postRequest(url, data, callback);
};

