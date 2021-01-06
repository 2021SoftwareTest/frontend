function parseParams(data) {
    // json转为URL参数
    try {
        const tempArr = [];
        for (const key in data) {
            // const value = encodeURIComponent(data[i]);
            tempArr.push(key + '=' + data[key]);
            // tempArr.push(value);
        }
        return tempArr.join('&');
    } catch (err) {
        return '';
    }
}

// eslint-disable-next-line no-unused-vars
function getParams(url) {  // URL参数转为json
    try {
        url = url.match(/\?([^#]+)/)[1];
        const obj = {}, arr = url.split('&');
        for (let i = 0; i < arr.length; i++) {
            const subArr = arr[i].split('=');
            const key = decodeURIComponent(subArr[0]);
            const value = decodeURIComponent(subArr[1]);
            obj[key] = value;
        }
        return obj;

    } catch (err) {
        return null;
    }
}

// const fetch = require('node-fetch');

const postRequest = (url, json, callback) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        mode: 'cors',
    };

    fetch(url, opts)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {postRequest};

const getRequest = (url, json, callback) => {
    const opts = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        mode: 'cors',
    };
    // console.log("参数",url+"?"+parseParams(json));
    if (json) {
        url = url + '?' + parseParams(json);
    }
    console.log(url);
    fetch(url, opts)
        .then((response) =>
            // json=response.json();
            response.json()
        )
        .then((data) => {
            callback(data);
            // console.log("data!!!",data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {getRequest};

const deleteRequest = (url, json, callback) => {
    const opts = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        mode: 'cors',
    };
    // console.log("参数",url+"?"+parseParams(json));

    fetch(url + '/' + parseParams(json), opts)
        .then((response) =>
            // json=response.json();
            response.json()
        )
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {deleteRequest};

const putRequest = (url, json, callback) => {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        mode: 'cors',
    };

    fetch(url, opts)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {putRequest};
