import { cleanUpList, cleanUpDetail } from '../actions/cleanUpAction';

export const cleanUpListThunk = () => {
  return (dispatch) => {
    dispatch(cleanUpList());
  }
}

export const cleanUpDetailThunk = () => {
  return (dispatch) => {
    dispatch(cleanUpDetail());
  }
}