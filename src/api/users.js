import { apiUrls } from './index';

export function logIn(authData){

	let headers = new Headers();
	headers.append("Authorization", "Basic " + authData);

	return fetch(apiUrls.LOG_IN, { method: 'POST', headers: headers}).then(response => {
    if (response.status === 401){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}

export function getProCalls(authData, pageNumber){
	let headers = new Headers();
	headers.append("Authorization", "Basic " + authData);

	return fetch(apiUrls.GET_PRO_CALLS + pageNumber, { method: 'GET', headers: headers}).then(response => {
    if (response.status === 401){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}

export function getPersonalCalls(authData, pageNumber){
	let headers = new Headers();
	headers.append("Authorization", "Basic " + authData);

	return fetch(apiUrls.GET_PERSONAL_CALLS + pageNumber, { method: 'GET', headers: headers}).then(response => {
    if (response.status === 401){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}


export function getTransactions(authData, pageNumber){
	let headers = new Headers();
	headers.append("Authorization", "Basic " + authData);

	return fetch(apiUrls.GET_TRANSACTIONS, { method: 'GET', headers: headers}).then(response => {
    if (response.status === 401){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}





export function register(data){

	let headers = new Headers();
	headers.append("Content-Type", "application/json ");
	return fetch(apiUrls.REGISTER, { method: 'POST', headers: headers, body: JSON.stringify( data )}).then(response => {
    if (response.status === 401 || response.status === 400 || response.status === 415 || response.status === 500){
			return {};
		}
		return response.json().then(json => {
			return {authData: window.btoa(data.email + ':' + data.password)};
		});

	}, error => {
		throw new Error(error.message);
	});
}
