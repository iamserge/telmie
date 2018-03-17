// ACTION TYPES
export const actionTypes = {
	USER_DETAILS_FETCHED: 'USER_DETAILS_FETCHED',
	HIDE_SEARCH_BOX: 'HIDE_SEARCH_BOX',
	SHOW_SEARCH_BOX: 'SHOW_SEARCH_BOX',
	LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
	LOG_IN_FAILURE: 'LOG_IN_FAILURE',
	PRO_CALLS_RECEIVED: 'PRO_CALLS_RECEIVED',
	PERSONAL_CALLS_RECEIVED: 'PERSONAL_CALLS_RECEIVED',
	TRANSACTIONS_RECEIVED: 'TRANSACTIONS_RECEIVED',
	AUTH_FAILURE: 'AUTH_FAILURE',
	REGISTER_SUCCESS: 'REGISTER_SUCCESS',
	REGISTER_FAILURE: 'REGISTER_FAILURE',
	LOGGED_OFF: 'LOGGED_OFF',
	EDIT_SUCCESS: 'EDIT_SUCCESS',
	EDIT_FAILURE: 'EDIT_FAILURE'
};

//export { getCart, addToCart, updateItemQuantity, basketActionSeen } from './cart';
const hideSearch = (facet) => ({
	type: actionTypes.HIDE_SEARCH_BOX
});



export const hideSearchBox = () => (dispatch) => {
	dispatch(hideSearch());
};
