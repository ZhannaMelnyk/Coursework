import { successfulFetchDetails, failureFetchDetails } from '../actions/productDetailAction';

export const detailsThunk = (id) => {
	return (dispatch) => {
		console.log(process.env.API_URL);
		fetch(`${process.env.API_URL}/api/products/${id}`)
			.then(response => response.json())
			.then(product => dispatch(successfulFetchDetails(product)))
			.catch(error => dispatch(failureFetchDetails(error)))
	}
}