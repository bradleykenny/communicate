import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class ProfilesTable {

	// Get a user from the Accounts table based on `username`
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