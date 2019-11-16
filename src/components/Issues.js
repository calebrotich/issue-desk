import React from 'react';
import axiosConfig from '../config/axios';

const Issues = () => {
  axiosConfig
  .get('/issue_tracking/issues')
  .then((res) => {
    if (res) {
      console.log(res);
    }
  })
  .catch(() => {
    console.log('Something broke', 'Kindly try again later');
  });
  return (<section>Issues</section>);
}
export default Issues;
