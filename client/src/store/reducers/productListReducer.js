import { SUCCESSFUL_FETCH_LIST, FAILURE_FETCH_LIST } from '../actions/productListAction'
import { CLEAN_UP_LIST } from '../actions/cleanUpAction'

const initialState = {
	data: [],
	error: null,
	isLoaded: false
}

export const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESSFUL_FETCH_LIST:
			return { ...state, data: action.data, isLoaded: true }
		case FAILURE_FETCH_LIST:
			return { ...state, error: action.error, isLoaded: true }
		case CLEAN_UP_LIST:
			return { initialState }
		default:
			return state;
	}
}