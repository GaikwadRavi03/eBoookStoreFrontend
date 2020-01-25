import URL from '../Constants/Constants'
const axios = require('axios').default;

export function getMethod(data) {
    return axios.get(URL + data.path);
}

export function postMethod(data) {
    return axios.post(URL + data.path, data.data);
}