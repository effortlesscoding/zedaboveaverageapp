import axios from 'axios';

const login = ({ username, password }) => {
  return axios.post('http://10.0.2.2:3000/api/login', { username, password }).then(({ data }) => {
    return data;
  }).catch(e => {
    console.log('e::', e.response.data);
    return Promise.reject(new Error(e.response.data && e.response.data.message));
  });
};

export const authenticationService = {
  login,
};