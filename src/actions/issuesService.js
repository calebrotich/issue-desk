import axiosConfig from '../config/axios';
import {toastr} from "react-redux-toastr";

export const issuesService = {
  createIssue, createResolution
};

function createIssue(issueData) {
  return axiosConfig
      .post('/issue_tracking/issues', issueData)
      .then(response => {
          toastr.success('Issue Created', `Issue added to issues listings`);
        return window.location.href = '/issues/all';
      })
      .catch((error) => {
        toastr.error('Error', 'Failed to fetch');
        return  error;
      });
}

function createResolution(resData) {
    return axiosConfig
        .post('/issue_tracking/resolutions',resData)
        .then(response => {
            toastr.success('Success', 'Issues status updated');
            return  window.location.href = '/issues/resolved';
        })
        .catch((error) => {
            toastr.error('Error', 'Failed to fetch');
            return  error;
        });
}
