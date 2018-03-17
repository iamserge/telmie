import * as user from '../api/users';
import { actionTypes } from './index';
const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

const eraseCookie = (name) => {
    document.cookie = name+'=; Max-Age=-99999999;';
}

const logInSuccess = (response, authData) => ({
	type: actionTypes.LOG_IN_SUCCESS,
	userData: response,
	userAuth: authData
});
const logInFailure = (response) => ({
	type: actionTypes.LOG_IN_FAILURE
});

const loggedOff = (response) => ({
	type: actionTypes.LOGGED_OFF
});

const editSuccess = (response, userAuth) => ({
	type: actionTypes.EDIT_SUCCESS,
  userData: response,
  userAuth: userAuth
});
const editFailure = () => ({
	type: actionTypes.EDIT_FAILURE,
});


const registerSuccess = () => ({
	type: actionTypes.REGISTER_SUCCESS,
});
const registerFailure = () => ({
	type: actionTypes.REGISTER_FAILURE,
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
		setCookie('USER_AUTH', authData, 30);
	}
};

export const logOff = () => (dispatch) => {
	dispatch(loggedOff());
	eraseCookie('USER_AUTH');
};
export const register = (data) => async (dispatch) => {
	const response = await user.register(data);
	if (Object.keys(response).length === 0) {
		dispatch(registerFailure());
	} else {
		dispatch(registerSuccess(response));
		dispatch(logIn(response.authData));
	}
};

export const editDetails = (data) => async (dispatch) => {
	const response = await user.editDetails(data);
	if (Object.keys(response).length === 0) {
		dispatch(editFailure());
	} else {

		dispatch(editSuccess(response, data.userAuth));

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
