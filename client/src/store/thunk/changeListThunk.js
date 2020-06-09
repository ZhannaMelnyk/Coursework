import { changeList } from '../actions/changeListAction';

export const changeListThunk = (list) => {
  return (dispatch) => {
    dispatch(changeList(list));
  }
}