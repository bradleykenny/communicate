import axios from "axios";

export const getMessageService = async (uid: string, type: string) => {
	const MESSAGE_API_ENDPOINT =
		process.env.REACT_APP_API + "/messages/get/" + type + "?uid=" + uid;
	let response = await axios.get(MESSAGE_API_ENDPOINT);

	return response.data;
};
