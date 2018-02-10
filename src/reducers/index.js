import { combineReducers } from 'redux';

import * as user from './user';

const rootReducer = combineReducers({
	test: user.details
});

export default rootReducer;
