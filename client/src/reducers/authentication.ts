import axios from 'axios';
import { LoginAction } from '../actions/login';

let sid = localStorage.getItem('sessionID');
let user = {};
if (sid) {
	const GETUSER_API_ENDPOINT = process.env.REACT_APP_API + `/get/user?sid=${sid}`;
	user = axios.get(GETUSER_API_ENDPOINT).then(res => res.data); // want this to work in sync
}

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