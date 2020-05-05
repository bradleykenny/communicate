import { combineReducers } from 'redux';

import { authReducer } from './authentication';

const rootReducer = combineReducers({
	// reducers here
	auth: authReducer,
});

export default rootReducer;