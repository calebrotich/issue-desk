import axiosConfig from '../config/axios';
import {toastr} from "react-redux-toastr";

export const dashboardService = {
    getDashboard,
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
