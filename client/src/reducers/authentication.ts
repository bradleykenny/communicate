import { LoginAction } from '../actions';

export function authReducer(state = {}, action: LoginAction) {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return {
				loggingIn: true,
				user: action.input
			};
		case "LOGIN_SUCCESS":
			return {
				loggedIn: true,
				user: action.user
			};
		case "LOGIN_FAILED":
			return { 
				loggingIn: false
			};
		case "LOGOUT":
			return {
				loggedIn: false,
				user: {},
			};
		default:
			return state
	}
}