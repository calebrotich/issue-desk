import { USERS_SUCCESS, USERS_ERROR, USERS_REQUEST } from '../types';

const initialState = {
  user: {},
  errors: {},
  isLoading: false,
  success: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        success: true,
        isLoading: false,
      };
    case USERS_ERROR:
      return {
        ...state,
        errors: action.payload,
        success: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
