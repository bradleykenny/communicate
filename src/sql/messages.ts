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
						this.modifyUsernames(results).then((res: any) => {
							resolve(res);
						});
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
						this.modifyUsernames(results).then((res: any) => {
							resolve(res);
						});
					}
					else resolve(results);
				}
			);
		});
	};

	static modifyUsernames (messages: Array<Message>): Promise<object> {
		const query = "SELECT * FROM Accounts WHERE uid=?; SELECT * FROM Accounts WHERE uid=?;"; // TODO: change this to not get * but only parts needed
		return new Promise((resolve: any) => {
			let finals: Message[] = [];
			messages.forEach((value: Message) => {
				connection.query(
					query, 
					[ value.sender, value.receiver ], 
					(error: any, results: Array<Array<Account>>) => {
						if (error) console.error(error);
						value.sender = results[0][0].username;
						value.receiver = results[1][0].username;
						finals.push(value);
						// TODO: make this better, feels super dodgy
						if (finals.length === messages.length) {
							resolve(finals);
						}
					}
				);
			});
		});
	};

};