import { SUCCESSFUL_FETCH_LIST, FAILURE_FETCH_LIST } from '../actions/productListAction'

const initialState = {
	list: [],
	error: null,
	isLoaded: false
}

export const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESSFUL_FETCH_LIST:
			return { ...state, list: action.data, isLoaded: true }
		case FAILURE_FETCH_LIST:
			return { ...state, error: action.error, isLoaded: true }
		default:
			return state;
	}
}