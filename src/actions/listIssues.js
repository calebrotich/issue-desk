import { ISSUES_SUCCESS, ISSUES_ERROR, ISSUES_REQUEST } from '../types';
import axiosConfig from '../config/axios';

const listIssues = () => (dispatch) => {
  dispatch({
    type: ISSUES_REQUEST,
  });
  axiosConfig
    .get('/issue_tracking/issues')
    .then((res) => {      
      if (res) {
        dispatch({
          type: ISSUES_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(() => {
      dispatch({
        type: ISSUES_ERROR
      });
    });
};

export default listIssues;
