import { cleanUp } from '../actions/cleanUpAction';

export const detailsThunk = () => {
	return (dispatch) => {
		dispatch(cleanUp());
	}
}