import * as user from '../api/users';
import { actionTypes } from './index';

const logInSuccess = (response, authData) => ({
	type: actionTypes.LOG_IN_SUCCESS,
	userData: response,
	userAuth: authData
});
const logInFailure = (response) => ({
	type: actionTypes.LOG_IN_FAILURE
});

const authFailure = (response) => ({
	type: actionTypes.AUTH_FAILURE
});

const proCallsReceived = (response) => ({
	type: actionTypes.PRO_CALLS_RECEIVED,
	calls: response
});


const personalCallsReceived = (response) => ({
	type: actionTypes.PERSONAL_CALLS_RECEIVED,
	calls: response
});

const transactionsReceived = (response) => ({
	type: actionTypes.TRANSACTIONS_RECEIVED,
	transactions: response
});



export const logIn = (authData) => async (dispatch) => {
	const response = await user.logIn(authData);
	if (Object.keys(response).length === 0) {
		dispatch(logInFailure());
	} else {
		dispatch(logInSuccess(response, authData));
	}

};




export const getProCalls = (authData) => async (dispatch) => {
	const response = await user.getProCalls(authData);
	if (Object.keys(response).length === 0) {
		dispatch(authFailure());
	} else {
		dispatch(proCallsReceived(response));
	}
};

export const getPersonalCalls = (authData) => async (dispatch) => {
	const response = await user.getPersonalCalls(authData);
	if (Object.keys(response).length === 0) {
		dispatch(authFailure());
	} else {
		dispatch(personalCallsReceived(response));
	}
};


export const getTransactions = (authData) => async (dispatch) => {
	const response = await user.getTransactions(authData);
	if (Object.keys(response).length === 0) {
		dispatch(authFailure());
	} else {
		dispatch(transactionsReceived(response));
	}
};
