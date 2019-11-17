import { ISSUES_SUCCESS, ISSUES_ERROR, ISSUES_REQUEST } from '../types';
import axiosConfig from '../config/axios';

const listIssues = (status_id) => (dispatch) => {
  if(status_id === 100) status_id = '';
  dispatch({
    type: ISSUES_REQUEST,
  });
  axiosConfig
    .get(`/issue_tracking/issues?status=${status_id}`)
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
