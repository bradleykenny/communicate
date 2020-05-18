import { combineReducers } from 'redux';

import { authReducer } from './authentication';
import { userReducer } from './user';
import { messageReducer } from './messages';
import { focusMessageReducer } from './focusMessage';

const rootReducer = combineReducers({
	// reducers here
	auth: authReducer,
	user: userReducer,
	messages: messageReducer,
	focusMessage: focusMessageReducer,
});

export default rootReducer;