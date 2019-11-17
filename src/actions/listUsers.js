import { USERS_SUCCESS, USERS_ERROR, USERS_REQUEST } from '../types';
import axiosConfig from '../config/axios';

const listCustomers = () => (dispatch) => {
  dispatch({
    type: USERS_REQUEST,
  });
  axiosConfig
    .get('/issue_tracking/users')
    .then((res) => {      
      if (res) {
        dispatch({
          type: USERS_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: USERS_ERROR
      });
    });
};

export default listCustomers;
