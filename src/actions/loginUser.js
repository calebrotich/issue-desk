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
    .get('/issue_tracking/authenticate', {headers: {credentials}})
    .then((res) => {
      if (res) {
        toastr.success('Login success!');
        dispatch({
          type: LOGIN_USER,
          payload: { ...res.data.user, success: true },
        });
        toastr.success('Successful Login', `${res.data.user.username} logged in successfully`);
      }
    })
    .catch((errors) => {
      console.log(errors);
      // const err = JSON.parse(errors.request.response);
      // const err = errors.request.response;
      // dispatch({
      //   type: LOGIN_ERROR,
      //   payload: err.errors,
      // });
      // const message = err.errors.error[0];
      // toastr.error('Login Failed', message);
      toastr.error('Login Failed');

    });
};

export default loginUser;
