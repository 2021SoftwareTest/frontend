const postRequestForm = (url, data, callback) => {
  const form = new FormData();

  for (const p in data) {
    if (data.hasOwnProperty(p)) {
      form.append(p, data[p]);
    }
  }

  const opts = {
    method: 'POST',
    body: form,
    credentials: 'include',
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

const postRequest = (url, json, callback) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
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

export { postRequest, postRequestForm };
