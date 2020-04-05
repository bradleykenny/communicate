import { connection } from '.';

const mysql = require('mysql');
const sqlstring = require('sqlstring');
const uuid = require('uuid');

export default class AccountsTable {
	static insertUser = function (username: string, firstName: string, lastName: string): void {
		const query = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
		connection.query(
			query, 
			[ uuid.v4(), username, firstName, lastName ],
			(error: object, results: object, fields: object) => {
				if (error) throw error;
				console.log(`Inserted user \'${ username }\' into the table.`);
			}
		);
	};

	static getUser = function (username: string): object {
		const query = "SELECT * FROM accounts WHERE username='?'";
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