import { history } from'../services/history';
import { getMessages } from './messages';
import { getUserInfoService } from '../services/userService';

export interface SessionData {
	sid: string,
}

export interface UserData {
	uid: string,
	email: string,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	profilePicture: string,
	username: string,
}

export function emptyUser(): UserData {
	return {
		uid: "",
		email: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		profilePicture: "",
		username: "",
	}
}

export type UserAction =
	| { type: 'USER_REQUEST'; input: SessionData } 
	| { type: 'USER_SUCCESS'; user: UserData } 
	| { type: 'USER_FAILED'; error: string };


// Action creators

export function getUserInfo() {
    return (dispatch: any) => {
        dispatch(request());

        getUserInfoService()
            .then(
                (user: UserData) => { dispatch(success(user)); dispatch(getMessages(user.uid, "received")); },
                (error: any) => dispatch(failure(error))
            );
    };

    function request() { return { type: "USER_REQUEST" } }
    function success(users: any) { return { type: "USER_SUCCESS", user: users } }
    function failure(error: any) { return { type: "USER_FAILURE", error: error } }
}