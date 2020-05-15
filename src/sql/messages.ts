import { connection } from './index';
import { v4 as uuid } from 'uuid';

import { AccountsTable, Account } from './';

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
		AccountsTable.getUserByUN(receiver).then((recUser: Account) => { 
			connection.query(
				query, 
				[ mid, sender, recUser.uid, title, text, time ],
				(error: any, results: any) => {
					if (error) console.error(error);
					console.log(`Message ${ mid } sent.`);
				}
			);
		});
	};
	
	// Get all messages sent to the user with `uid`
	static getMessagesReceived (uid: string): Promise<object> {
		const query = "SELECT * FROM Messages WHERE receiver=?";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ uid ], 
				(error: any, results: any) => {
					if (error) console.error(error);
					if (results.length > 0) {
						this.modifyUsername(results);
						resolve(results);
					}
					else resolve(results);
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
					if (error) console.error(error);
					if (results.length > 0) {
						this.modifyUsername(results);
						resolve(results);
					}
					else resolve(results);
				}
			);
		});
	};

	static modifyUsername (messages: Array<Message>): Promise<object> {
		const query = "SELECT * FROM Accounts WHERE uid=?"; // TODO: change this to not get * but only parts needed
		return new Promise((resolve: any) => {
			resolve(messages.map((value: Message) => {
				connection.query(
				query, 
				[ value.sender ], 
				(error: any, results: Array<Account>) => {
					if (error) console.error(error);
					value.sender = results[0].username;
					console.log(value);
					return value;
				})
				console.log(value);
			}));
		});
	}

};