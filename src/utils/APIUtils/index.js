const getEncodeData = data => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return formBody;
};

const getFormEncodedData = data => {
  let formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

const SERVER_URL = 'http://54.179.8.43:9090/api/mobile/app';

export {getEncodeData, getFormEncodedData, SERVER_URL};
