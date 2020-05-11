import { combineReducers } from 'redux';

import { authReducer } from './authentication';
import { userReducer } from './user';

const rootReducer = combineReducers({
	// reducers here
	auth: authReducer,
	user: userReducer,
});

export default rootReducer;