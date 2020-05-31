import { successfulFetchDetails, failureFetchDetails } from '../actions/productDetailAction';

export const detailsThunk = (id) => {
	return (dispatch) => {
		fetch(`http://localhost:3030/api/products/${id}`)
			.then(response => response.json())
			.then(product => dispatch(successfulFetchDetails(product)))
			.catch(error => dispatch(failureFetchDetails(error)))
	}
}