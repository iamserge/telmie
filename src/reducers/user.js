import { actionTypes } from '../actions';
import { concat, orderBy, map, without } from 'lodash';


export const loggedInUser = (state = {}, action) => {
	let user;
	switch (action.type) {
		case actionTypes.LOG_IN_SUCCESS:
			user = action.userData;
			user.userAuth = action.userAuth;
			return user;

		case actionTypes.EDIT_SUCCESS:
			user = action.userData;
			user.userAuth = action.userAuth;
			return user;

		case actionTypes.LOGGED_OFF:
			return {};

		default:
			return state;
	}
};


export const logInError = (state = {}, action) => {
	switch (action.type) {

		case actionTypes.LOG_IN_FAILURE:
			let date = new Date();
			return date.getTime();

		default:
			return false;
	}
};

export const registerSuccess = (state = {}, action) => {
	switch (action.type) {

		case actionTypes.REGISTER_SUCCESS:
			return true;

		case actionTypes.LOG_IN_SUCCESS:
			return true;

		default:
			return false;
	}
};
export const registerFailure = (state = {}, action) => {
	switch (action.type) {

		case actionTypes.REGISTER_FAILURE:
			return true;

		default:
			return false;
	}
};

export const proCalls = (state = [], action) => {
	switch (action.type) {

		case actionTypes.PRO_CALLS_RECEIVED:
			return action.calls;

		default:
			return state;
	}
};
//
export const personalCalls = (state = [], action) => {
	switch (action.type) {

		case actionTypes.PERSONAL_CALLS_RECEIVED:
			return action.calls;

		default:
			return state;
	}
};

export const activity = (state = [], action) => {
	let activity;
	switch (action.type) {
		case actionTypes.PERSONAL_CALLS_RECEIVED:
			let personalCalls = action.calls.map((activity)=>{
				let newActivity = activity;
				newActivity.type = "PERSONAL"
				return newActivity;
			});

			activity = state.concat(personalCalls);
			activity = orderBy(activity, 'date', 'desc');
			activity = map(activity, (entry) => {
				if (entry.status != 'SHORTLIST') return entry;
			});
			activity = without(activity, undefined);
			return activity.slice(0, 10);


		case actionTypes.PRO_CALLS_RECEIVED:
			let proCalls = action.calls.map((activity)=>{
				let newActivity = activity;
				newActivity.type = "PRO"
				return newActivity;

			});

			activity = state.concat(proCalls);
			activity = orderBy(activity, 'date', 'desc');

			activity = map(activity, (entry) => {
				if (entry.status != 'SHORTLIST') return entry;
			});
			activity = without(activity, undefined);

			return activity.slice(0, 10);

		default:
			return state;
	}

};


export const transactions = (state = [], action) => {
	switch (action.type) {

		case actionTypes.TRANSACTIONS_RECEIVED:
			let transactions = orderBy(action.transactions, 'date', 'desc');
			return transactions;

		default:
			return state;
	}
};
