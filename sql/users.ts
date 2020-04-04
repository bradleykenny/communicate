import { connection } from './main';

const mysql = require('mysql');
const sqlstring = require('sqlstring');
const uuid = require('uuid');

export default class UsersDB {
	static insertUser = function (username: string, firstName: string, lastName: string) {
		connection.connect();
		const str = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
		let safeQuery = sqlstring.format(str, [ uuid.v4(), username, firstName, lastName ]);
		connection.query(safeQuery, function(err: object, results: object, fields: object) {
			if (err) throw err;
			console.log(`Inserted user \'${ username }\' into the table.`);
		});
	};
};