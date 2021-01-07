import {getRequest, postRequest} from '../utils/ajax';
import {authUrl, userUrl, verificationUrl} from '../utils/config';
import {message} from "antd";
import {history} from "../utils/history";

export const login = (data) => {
    const url = authUrl + 'login';
    const callback = (data) => {
        if (data.status === 200) {
            if (data.data.user.userType === -1) {
                message.error('您的账号已经被禁用！');
            } else {
                localStorage.setItem('user', JSON.stringify(data.data.user));
                window.location.assign("/#/") ;
                message.success(data.msg);
            }
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = (callback) => {
    const url = authUrl + 'logout';
    getRequest(url, undefined, callback);
};

export const sendVerification = (data, callback) => {
    const url = verificationUrl + 'send';
    postRequest(url, data, callback);
};

export const register = (data, callback) => {
    const url = userUrl + 'register';
    postRequest(url, data, callback);
};

export const getOtherUserInfo = (data, callback) => {
    const url = userUrl + 'otherinfo';
    getRequest(url, data, callback);
};

export const getUserInfo = (data, callback) => {
    const url = userUrl + 'getinfo';
    getRequest(url, data, callback);
};

export const saveUserInfo = (data, callback) => {
    const url = userUrl + 'info';
    postRequest(url, data, callback);
};

// export const changePassword = (data, callback) => {
//     const url = userUrl + 'password';
//     postRequest(url, data, callback);
// };

// export const setAvatar = (data, callback) => {
//     const url = baseUrl + 'avatar';
//     postRequest(url, data, callback);
// };

export const checkSession = (callback) => {
    const url = authUrl + 'checkAuth';
    getRequest(url, undefined, callback);
};
