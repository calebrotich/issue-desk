import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { reducer as toastReducer } from 'react-redux-toastr';

export default combineReducers({
  login: loginReducer,
  toastr: toastReducer,
});
