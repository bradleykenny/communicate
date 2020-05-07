import axios from 'axios';

export const loginUserService = async (username: string, password: string) => {
	const LOGIN_API_ENDPOINT = process.env.REACT_APP_API + '/login';
	let response = await axios.post(LOGIN_API_ENDPOINT, { username: username, password: password });
	if (response.data === true) {
		console.log("hello....");
		return response.data;
	} return Promise.reject("Incorrect username/password.");
};