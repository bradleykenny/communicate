import { connection } from './index';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

import { SessionsTable } from './sessions';

export class Authentication {
	
	static login(username: string, password: string): Promise<object> {
		const query = "SELECT * FROM Accounts WHERE username=?";
		return new Promise((resolve: any) => {
			connection.query(
				query,
				[ username ],
				(error: any, results: any) => {
					if (error) throw error;
					if (results[0]) {
						const dbPassword = results[0].password;
						bcrypt.compare(password, dbPassword, (error: any, result: any) => {
							if (error) throw error;
							if (result === true) {
								resolve(SessionsTable.createSession(results[0].uid));
								//resolve({ username: username, email: results[0].email, profilePicture: results[0].profilePicture });
							} resolve(undefined);
						});
					} else {
						resolve(undefined);
					}
				}
			);
		});
	}

	static register (email: string, username: string, password: string, firstName: string, lastName: string): void {
		const query = `
			INSERT INTO Accounts (email, uid, username, password) VALUES (?, ?, ?, ?); 
			INSERT INTO Profiles (uid, firstName, lastName) VALUES (?, ?, ?);
		`
		const uid = uuid();
		bcrypt.hash(password, 10).then((encryptedPassword) => {
			connection.query(
				query, 
				[ email, uid, username, encryptedPassword, uid, firstName, lastName ],
				(error: any, results: any) => {
					if (error) throw error;
					console.log(`Registered \'${ username }\'.`);
				}
			);
		});
	}
};