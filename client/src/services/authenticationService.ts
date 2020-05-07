import axios from 'axios';

export const loginUserService = async (username: string, password: string) => {
	const LOGIN_API_ENDPOINT = process.env.REACT_APP_API + '/login';
	let response = await axios.post(LOGIN_API_ENDPOINT, { username: username, password: password });
	if (response.data) { document.cookie = `sessionID=${response.data}`; }
	return response.data;
};