import axios from 'axios';

export const loginUserService = async (request: any) => {
	const LOGIN_API_ENDPOINT = process.env.REACT_APP_API + '/login2';
	let response = await axios.post(LOGIN_API_ENDPOINT, request);
	return response.data;
};