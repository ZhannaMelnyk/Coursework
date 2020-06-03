import { successfulFetchList, failureFetchList } from '../actions/productListAction';

export const listThunk = () => {
	return (dispatch) => {
		fetch(`${process.env.API_URL}/api/products/`)
			.then(response => response.json())
			.then(list => dispatch(successfulFetchList(list)))
			.catch(error => dispatch(failureFetchList(error)))
	}
}