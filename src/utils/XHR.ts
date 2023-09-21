import axios from 'axios';

function parseJSON(response: any) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json ? response.json() : response;
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;
  throw error;
}

export default (url: string, options: any) =>
  axios(url, options).then(checkStatus).then(parseJSON);