import axios from 'axios';

export const getUserInfoService = async () => {
	let sid = localStorage.getItem('sessionID');
	const GETUSER_API_ENDPOINT = process.env.REACT_APP_API + '/get/user?sid=' + sid;
	
	let result = await axios.get(GETUSER_API_ENDPOINT);
	return result.data;
};