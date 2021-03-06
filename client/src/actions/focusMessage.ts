import { MessageData } from './messages';

export type MessageFocusAction = { 
	type: 'MESSAGE_FOCUS',
	focusMessage: MessageData 
} 

// Action creators

export function focusMessage(message: MessageData) {
    return { type: 'MESSAGE_FOCUS', focusMessage: { ...message } };
}