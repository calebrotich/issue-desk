import axiosConfig from '../config/axios';
import {toastr} from "react-redux-toastr";

export const issuesService = {
  createIssue,
};

function createIssue(issueData) {
  return axiosConfig
      .post('/issue_tracking/issues',issueData)
      .then(response => {
          toastr.success('Successful Created', `Issue`);
        return  response;
      })
      .catch((error) => {
        toastr.error('Error', 'Failed to fetch');
        return  error;
      });
}
