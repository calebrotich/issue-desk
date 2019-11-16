import { toastr } from 'react-redux-toastr';
import { LOGIN_USER, LOGIN_ERROR, LOGIN_REQUEST } from '../types';
import axiosConfig from '../config/axios';

const loginUser = credentials => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  delete axiosConfig.defaults.headers.Authorization;
  localStorage.clear();
  axiosConfig
    .get('/issue_tracking/authenticate', {auth: {
      username: credentials.email,
      password: credentials.password
    }})
    .then((res) => {      
      if (res) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('fullname', res.data.user.name);
        dispatch({
          type: LOGIN_USER,
          payload: res.data.user,
        });
        toastr.success('Successful Login', `${res.data.user.name} logged in successfully`);
      }
    })
    .catch(() => {
      dispatch({
        type: LOGIN_ERROR
      });
      toastr.error('Login Failed', 'Username or password may be incorrect');
    });
};

export default loginUser;
