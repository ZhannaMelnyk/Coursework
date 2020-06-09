export const SUCCESSFUL_FETCH_DETAILS = 'SUCCESSFUL_FETCH_DETAIL';
export const FAILURE_FETCH_DETAILS = 'FAILURE_FETCH_DETAILS';

export const successfulFetchDetails = (newProductDetails) => {
  return {
    type: SUCCESSFUL_FETCH_DETAILS,
    data: newProductDetails
  }
}

export const failureFetchDetails = (error) => {
  return {
    type: FAILURE_FETCH_DETAILS,
    error: error
  }
}