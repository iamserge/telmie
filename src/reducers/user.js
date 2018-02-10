import { actionTypes } from '../actions';



export const details = (state = {}, action) => {
	switch (action.type) {

		case actionTypes.DETAILS_FETCHED:
			return action.details;

		default:
			return state;
	}
};
