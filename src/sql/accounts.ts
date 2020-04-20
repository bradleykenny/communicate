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
	static getUser (username: string): Promise<Object> {
		const query = "SELECT * FROM Accounts WHERE username=?";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ username ], 
				(error: any, results: any) => {
					if (error) throw error;
					resolve(results);
				}
			)
		});
	};
	
};