import { successfulFetchList, failureFetchList } from '../actions/productListAction';

export const listThunk = () => {
	return (dispatch) => {
		fetch(`http://localhost:3030/api/products/`)
			.then(response => response.json())
			.then(list => dispatch(successfulFetchList(list)))
			.catch(error => dispatch(failureFetchList(error)))
	}
}