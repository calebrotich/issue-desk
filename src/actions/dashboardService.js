import axiosConfig from '../config/axios';

export const dashboardService = {
    getDashboard,
};

function getDashboard() {
    axiosConfig
        .get('/issue_tracking/dashboard')
        .then(response => {
            // return  response;
        })
        .catch((error) => {
            //return  error;
        });
};
