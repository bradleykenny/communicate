import { connection } from './index';
import { v4 as uuid } from 'uuid';
import { Account } from '../types';

export class AccountsTable {
	
	// Insert a user into the Accounts table
	static insertUser (username: string, firstName: string, lastName: string): void {
		const query = `
			INSERT INTO Accounts (uid, username) VALUES (?, ?); 
			INSERT INTO Profiles (uid, firstName, lastName) VALUES (?, ?, ?);
		`
		const uid = uuid();
		connection.query(
			query, 
			[ uid, username, uid, firstName, lastName ],
			(error: any, results: any) => {
				if (error) console.error(error);
				console.log(`Inserted user \'${ username }\' into the table.`);
			}
		);
	};

	// Get a user from the Accounts table based on `uid`
	static getUser (uid: string): Promise<Array<Account>> {
		const query = "SELECT * FROM Accounts WHERE uid=?";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ uid ], 
				(error: any, results: any) => {
					if (error) console.error(error);
					resolve(results);
				}
			);
		});
	};

	// Get a user from the Accounts table based on `username`
	static getUserByUN (username: string): Promise<Account> {
		const query = "SELECT * FROM Accounts WHERE username=?";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ username ], 
				(error: any, results: any) => {
					if (error) console.error(error);
					resolve(results[0]);
				}
			);
		});
	};

	static getAllUsers (): Promise<Array<Account>> {
		const query = "SELECT * FROM Accounts";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ ], 
				(error: any, results: any) => {
					if (error) console.error(error);
					resolve(results);
				}
			);
		});
	}
	
};