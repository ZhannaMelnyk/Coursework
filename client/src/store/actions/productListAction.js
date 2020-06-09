export const SUCCESSFUL_FETCH_LIST = 'SUCCESSFUL_FETCH_LIST';
export const FAILURE_FETCH_LIST = 'FAILURE_FETCH_LIST';

export const successfulFetchList = (newProductList) => {
  return {
    type: SUCCESSFUL_FETCH_LIST,
    data: newProductList
  }
}

export const failureFetchList = (error) => {
  return {
    type: FAILURE_FETCH_LIST,
    error: error
  }
}