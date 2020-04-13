import { connection } from './index';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';

export default class AccountsTable {
	static insertUser (username: string, firstName: string, lastName: string): void {
		const query = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
		connection.query(
			query, 
			[ uuidv4(), username, firstName, lastName ],
			(error: object, results: object, fields: object) => {
				if (error) throw error;
				console.log(`Inserted user \'${ username }\' into the table.`);
			}
		);
	};

	static getUser (username: string): object {
		const query = "SELECT * FROM Accounts WHERE username=?";
		connection.query(
			query, 
			[ username ], 
			(error: object, results: object, fields: object) => {
				if (error) throw error;
				console.log(`Found ${ username }.`);
				return results;
			}
		);
		
		return { };
	};
};