import { CUSTOMERS_SUCCESS, CUSTOMERS_ERROR, CUSTOMERS_REQUEST } from '../types';
import axiosConfig from '../config/axios';

const listCustomers = () => (dispatch) => {
  dispatch({
    type: CUSTOMERS_REQUEST,
  });
  axiosConfig
    .get('/issue_tracking/customers')
    .then((res) => {      
      if (res) {
        dispatch({
          type: CUSTOMERS_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: CUSTOMERS_ERROR
      });
    });
};

export default listCustomers;
