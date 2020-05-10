import { connection } from './index';
import { v4 as uuid } from 'uuid';

export interface Message {
	mid: string,
	sender: string,
	receiver: string,
	text: string,
}

export class MessagesTable {

	// Get all messages sent to the user with `uid`
	static getMessagesReceived (uid: string): Promise<Object> {
		const query = "SELECT * FROM Messages WHERE receiver=?";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ uid ], 
				(error: any, results: any) => {
					if (error) throw error;
					resolve(results);
				}
			);
		});
	};
	
};