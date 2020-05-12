import axios from 'axios';

export const loginUserService = async (username: string, password: string) => {
	const LOGIN_API_ENDPOINT = process.env.REACT_APP_API + '/login';
	let response = await axios.post(LOGIN_API_ENDPOINT, { username: username, password: password });
	response.data && localStorage.setItem("sessionID", response.data);
	return response.data;
};

export const logoutUserService = async () => {
	localStorage.removeItem('sessionID');
};