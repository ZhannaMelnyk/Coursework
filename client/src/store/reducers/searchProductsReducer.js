import { SEARCH_PRODUCTS } from '../actions/searchProductsAction';

const initialState = '';

export const searchProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_PRODUCTS:
			return action.productName
		default:
			return state;
	}
}