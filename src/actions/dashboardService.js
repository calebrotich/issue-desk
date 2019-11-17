import axiosConfig from '../config/axios';
import {toastr} from "react-redux-toastr";

export const dashboardService = {
    getDashboard,
    createUser

};

function getDashboard() {
   return axiosConfig
        .get('/issue_tracking/dashboard')
        .then(response => {
             return  response;
        })
        .catch((error) => {
            toastr.error('Error', 'Failed to fetch');
            return  error;
        });
}

function createUser(userData) {
    return axiosConfig
        .post('/issue_tracking/users',userData)
        .then(response => {
            toastr.success('Successful Created', `User`);
            if(userData.type === 1) {
                window.location.replace('/users');
            } else {
                window.location.replace('/customers');
            }
            return  response;
        })
        .catch((error) => {
            toastr.error('Error', 'Failed to Create');
            return  error;
        });
}