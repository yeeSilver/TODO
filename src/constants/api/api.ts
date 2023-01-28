export const AuthAPI = {
  LOGIN: `${process.env.REACT_APP_BASE_URL}/users/login`,
  REGISTER: `${process.env.REACT_APP_BASE_URL}/users/create`,
};

export const TodoAPI = {
  CREATE: `${process.env.REACT_APP_BASE_URL}/todos`,
};
