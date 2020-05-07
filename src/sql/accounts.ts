import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class AccountsTable {
	
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
				if (error) throw error;
				console.log(`Inserted user \'${ username }\' into the table.`);
			}
		);
	};

	// Get a user from the Accounts table based on `username`
	static getUser (uid: string): Promise<Object> {
		const query = "SELECT * FROM Accounts WHERE uid=?";
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

	static getProfile (uid: string): Promise<Object> {
		const query = "SELECT * FROM Profiles WHERE uid=?";
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