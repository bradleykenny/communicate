import { MessageFocusAction } from '../actions/';

export function focusMessageReducer(state = {}, action: MessageFocusAction) {
	switch (action.type) {
		case "MESSAGE_FOCUS":
			return { focusMessage: { ...action.focusMessage } };
		default:
			return state
	}
}