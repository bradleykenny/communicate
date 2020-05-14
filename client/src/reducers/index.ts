import { combineReducers } from 'redux';

import { authReducer } from './authentication';
import { userReducer } from './user';
import { messageReducer } from './messages';

const rootReducer = combineReducers({
	// reducers here
	auth: authReducer,
	user: userReducer,
	messages: messageReducer
});

export default rootReducer;