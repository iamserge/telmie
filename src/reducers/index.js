import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

import * as user from './user';

const hiddenSearchBoxReduxer = (state = {}, action) => {
	switch (action.type) {

		case actionTypes.HIDE_SEARCH_BOX:
			return true;

		default:
			return false;
	}
};



const rootReducer = combineReducers({
	hiddenSearchBox: hiddenSearchBoxReduxer
});

export default rootReducer;
