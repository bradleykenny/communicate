import { UserAction } from '../actions/user';

export function userReducer(state = {}, action: UserAction) {
	switch (action.type) {
		case "USER_REQUEST":
			return {
				loggingIn: true,
				user: action.input
			};
		case "USER_SUCCESS":
			return {
				loggedIn: true,
				user: action.user
			};
		case "USER_FAILED":
			return { 
				loggingIn: false
			};
		default:
			return state
	}
}