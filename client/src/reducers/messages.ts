import { MessageAction } from '../actions/messages';

export function messageReducer(state = {}, action: MessageAction) {
	switch (action.type) {
		case "MESSAGES_REQUEST":
			return {
				requestSent: true,
				user: action.input
			};
		case "MESSAGES_RECEIVED":
			return {
				messagesReceived: true,
				messages: action.messages
			};
		case "MESSAGES_FAILED":
			return { 
				messagesReceived: false
			};
		default:
			return state
	}
}