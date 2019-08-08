const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    resolve({ status: 'OK' });
  }, 1500);
};

export const authenticationService = {
  login,
};