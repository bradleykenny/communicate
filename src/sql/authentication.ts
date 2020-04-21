import { connection } from './index';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export default class AuthenticationTable {
	static login(username: string, password: string): boolean {
		return true;
	}

	static async register(username: string, password: string): Promise<Object> {
		const encryptedPassword = await bcrypt.hash(password, 10)
		let users = {
			"username": username,
			"password": encryptedPassword
		}
		
		return new Promise((resolve: any) => {
			connection.query('INSERT INTO Accounts SET ?', users, (error: any, results: any, fields: any) => {
				if (error) return false;
				return true;
			});
		});
	}
};