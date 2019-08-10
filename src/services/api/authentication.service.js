import axios from 'axios';

const login = ({ username, password }) => {
  return axios.post('http://0.0.0.0:3000/api/login', { username, password }).then(({ data }) => {
    return data;
  }).catch(e => {
    return Promise.reject(new Error(e.response.data && e.response.data.message));
  });
};

export const authenticationService = {
  login,
};