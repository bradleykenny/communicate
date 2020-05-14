import { history } from'../services/history';
import { getMessageService } from '../services/messageService';

export interface MessageRequestData {
	uid: string,
	type: "sent" | "received" | "all",
}

export interface MessageData {
	mid: string,
	sender: string,
	receiver: string,
	text: string
}

export function emptyMessage(): MessageData {
	return {
		mid: "",
		sender: "",
		receiver: "",
		text: ""
	}
}

export type MessageAction =
	| { type: 'MESSAGES_REQUEST'; input: MessageRequestData } 
	| { type: 'MESSAGES_RECEIVED'; messages: Array<MessageData> } 
	| { type: 'MESSAGES_FAILED'; error: string };


// Action creators

export function getMessages(uid: string, type: string) {
    return (dispatch: any) => {
        dispatch(request());
		console.log(uid, type);
        getMessageService(uid, type)
            .then(
                (messages: MessageData) => dispatch(success(messages)),
                (error: any) => dispatch(failure(error))
            );
    };

    function request() { return { type: "MESSAGES_REQUEST" } }
    function success(messages: any) { console.log(); return { type: "MESSAGES_RECEIVED", messages: messages } }
    function failure(error: any) { return { type: "MESSAGES_FAILED", error: error } }
}