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
