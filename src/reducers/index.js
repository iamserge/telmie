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
	hiddenSearchBox: hiddenSearchBoxReduxer,
	loggedInUser: user.loggedInUser,
	logInFailure: user.logInError,
	loggedInUserProCalls: user.proCalls,
	loggedInUserPersonalCalls: user.personalCalls,
	loggedInUserActivity: user.activity,
	loggedInUserTransactions: user.transactions,
	registerSuccess: user.registerSuccess,
	registerFailure: user.registerFailure,
	shortlistPros: user.shortlistPros

});

export default rootReducer;
