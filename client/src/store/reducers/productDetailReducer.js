import { SUCCESSFUL_FETCH_DETAILS, FAILURE_FETCH_DETAILS } from '../actions/productDetailAction';
import { CLEAN_UP_DETAIL } from '../actions/cleanUpAction';

const initialState = {
  data: {},
  error: null,
  isLoaded: false
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSFUL_FETCH_DETAILS:
      return { ...state, data: action.data, isLoaded: true };
    case FAILURE_FETCH_DETAILS:
      return { ...state, error: action.error, isLoaded: true };
    case CLEAN_UP_DETAIL:
      return { initialState };
    default:
      return state;
  }
}