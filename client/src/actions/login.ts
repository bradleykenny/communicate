import { loginUserService, logoutUserService } from '../services/authenticationService';
import { history } from'../services/history';

interface LoginData {
	username: string;
	password: string;
}

export interface LoginUserData {
	username: string;
	email: string;
	profilePicture: string;
}

export type LoginAction =
	| { type: 'LOGIN_REQUEST'; input: LoginData } 
	| { type: 'LOGIN_SUCCESS'; user: LoginUserData } 
	| { type: 'LOGIN_FAILED'; error: string }
	| { type: 'LOGOUT' }


// Action creators

export function login(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(loginRequest({ username, password }));

        loginUserService(username, password)
            .then(
                (user: LoginUserData) => { 
					if (user) {
						dispatch(loginSuccess(user));
						history.push('/home');
					} else {
                    	dispatch(loginFailed("Username/password incorrect."));
					}
                }
            );
    };

    function loginRequest(input: LoginData): LoginAction {
		return { type: 'LOGIN_REQUEST', input };
	}
	
	function loginSuccess(user: LoginUserData): LoginAction {
		return { type: 'LOGIN_SUCCESS', user };
	}
	
	function loginFailed(error: string): LoginAction {
		return { type: 'LOGIN_FAILED', error };
	}
}

export function logout() {
	logoutUserService();
	history.push('/login');
	return { type: "LOGOUT" };
}