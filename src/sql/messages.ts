import { connection } from './index';
import { v4 as uuid } from 'uuid';

export interface Message {
	mid: string,
	sender: string,
	receiver: string,
	title: string,
	text: string,
	time: Date

}

export class MessagesTable {

	static sendMessage(sender: string, receiver: string, title: string, text: string): void {
		const query = "INSERT INTO Messages (mid, sender, receiver, title, text, time) VALUES (?, ?, ?, ?, ?, ?);";
		const mid = uuid();
		const time = new Date();
		connection.query(
			query, 
			[ mid, sender, receiver, title, text, time ],
			(error: any, results: any) => {
				if (error) throw error;
				console.log(`Message sent.`);
			}
		);
	};
	
	// Get all messages sent to the user with `uid`
	static getMessagesReceived (uid: string): Promise<object> {
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

	// Get all messages sent by the user with `uid`
	static getMessagesSent (uid: string): Promise<object> {
		const query = "SELECT * FROM Messages WHERE sender=?";
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