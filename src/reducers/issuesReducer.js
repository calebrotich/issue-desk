import { ISSUES_SUCCESS, ISSUES_ERROR, ISSUES_REQUEST } from '../types';

const initialState = {
  user: {},
  errors: {},
  isLoading: false,
  success: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ISSUES_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
      };
    case ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.payload,
        success: true,
        isLoading: false,
      };
    case ISSUES_ERROR:
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
