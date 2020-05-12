import { history } from'../services/history';
import { getUserInfoService } from '../services/userService';

export interface SessionData {
	sid: string,
}

export interface UserData {
	email: string,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	profilePicture: string,
	username: string,
}

export function emptyUser(): UserData {
	return {
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
                (users: UserData) => dispatch(success(users)),
                (error: any) => dispatch(failure(error))
            );
    };

    function request() { return { type: "USER_REQUEST" } }
    function success(users: any) { return { type: "USER_SUCCESS", user: users } }
    function failure(error: any) { return { type: "USER_FAILURE", error: error } }
}