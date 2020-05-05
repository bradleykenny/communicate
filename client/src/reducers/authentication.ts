import { LoginAction } from '../actions/login';

let user = {};
const initialState = user ? { loggedIn: true, user } : {};

export function authReducer(state = initialState, action: LoginAction) {
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
			return {};
		default:
			return state
	}
}