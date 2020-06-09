export const CHANGE_LIST = 'CHANGE_LIST';

export const changeList = (newList) => {
  return {
    type: CHANGE_LIST,
    list: newList
  }
}
