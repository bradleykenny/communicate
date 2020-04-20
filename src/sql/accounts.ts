import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class AccountsTable {
	static insertUser (username: string, firstName: string, lastName: string): void {
		const query = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
		connection.query(
			query, 
			[ uuid(), username, firstName, lastName ],
			(error: any, results: any, fields: any) => {
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
			(error: any, results: any, fields: any) => {
				if (error) throw error;
				console.log(`Found ${ username }.`);
				return results;
			}
		);

		return { };
	};
};