import { CUSTOMERS_SUCCESS, CUSTOMERS_ERROR, CUSTOMERS_REQUEST } from '../types';

const initialState = {
  user: {},
  errors: {},
  isLoading: false,
  success: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CUSTOMERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
      };
    case CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        success: true,
        isLoading: false,
      };
    case CUSTOMERS_ERROR:
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
