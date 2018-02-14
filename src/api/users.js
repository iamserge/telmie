import { apiUrls } from './index';

export  function getUsers(searchTerm){
	return fetch(apiUrls.SEARCH_USERS + searchTerm, { method: 'GET'}).then(response => {
    if (response.status === 404){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}


export  function getUserDetails(userId){
	return fetch(apiUrls.GET_USER_DETAILS + userId, { method: 'GET'}).then(response => {
    if (response.status === 404){
			return {};
		}
		return response.json().then(json => {
			return json;
		});

	}, error => {
		throw new Error(error.message);
	});
}
