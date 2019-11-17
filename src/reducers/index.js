import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import issuesReducer from './issuesReducer';
import customersReducer from './customersReducer';
import usersReducer from './usersReducer';

import { reducer as toastReducer } from 'react-redux-toastr';

export default combineReducers({
  login: loginReducer,
  toastr: toastReducer,
  issues: issuesReducer,
  customers: customersReducer,
  users: usersReducer,
});
