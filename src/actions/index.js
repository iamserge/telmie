// ACTION TYPES
export const actionTypes = {
	USER_DETAILS_FETCHED: 'USER_DETAILS_FETCHED',
	HIDE_SEARCH_BOX: 'HIDE_SEARCH_BOX',
	SHOW_SEARCH_BOX: 'SHOW_SEARCH_BOX'
};

//export { getCart, addToCart, updateItemQuantity, basketActionSeen } from './cart';
const hideSearch = (facet) => ({
	type: actionTypes.HIDE_SEARCH_BOX
});



export const hideSearchBox = () => (dispatch) => {
	dispatch(hideSearch());
};
