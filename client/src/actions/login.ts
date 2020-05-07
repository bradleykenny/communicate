import { loginUserService } from '../services/authenticationService';
import { history } from'../services/history';

interface LoginData {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	email: string;
	profilePicture: string;
}

export type LoginAction =
	| { type: 'LOGIN_REQUEST'; input: LoginData } 
	| { type: 'LOGIN_SUCCESS'; user: UserData } 
	| { type: 'LOGIN_FAILED'; error: string };


// Action creators

export function login(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(loginRequest({ username, password }));

        loginUserService(username, password)
            .then(
                (user: UserData) => { 
					console.log(typeof user);
					dispatch(loginSuccess(user));
					history.push('/');
                },
                (error: string) => {
					console.log(error);
                    dispatch(loginFailed(error));
                }
            );
    };

    function loginRequest(input: LoginData): LoginAction {
		return { type: 'LOGIN_REQUEST', input };
	}
	
	function loginSuccess(user: UserData): LoginAction {
		return { type: 'LOGIN_SUCCESS', user };
	}
	
	function loginFailed(error: string): LoginAction {
		return { type: 'LOGIN_FAILED', error };
	}
}