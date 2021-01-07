const postRequest = (url, json, callback) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
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
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
        },
       credentials: 'include',
        mode: 'cors',
    };
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

const putRequest = (url, json, callback) => {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
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
