import { SUCCESSFUL_FETCH_DETAILS, FAILURE_FETCH_DETAILS } from '../actions/productDetailAction'

const initialState = {
	product: {},
	error: null,
	isLoaded: false
}

export const detailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESSFUL_FETCH_DETAILS:
			return { ...state, product: action.data, isLoaded: true }
		case FAILURE_FETCH_DETAILS:
			return { ...state, error: action.error, isLoaded: true }
		default:
			return state;
	}
}