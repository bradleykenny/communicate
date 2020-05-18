import { history } from'../services/history';
import { getMessageService } from '../services/messageService';
import { MessageData } from './messages';

export type MessageFocusAction = { type: 'MESSAGE_FOCUS'; message: MessageData } 

// Action creators

export function focusMessage(message: MessageData) {
    return { type: 'MESSAGE_FOCUS', message: message };
}