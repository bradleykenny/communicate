import { connection } from './index';
import { v4 as uuid } from 'uuid';

export interface Profile {
	uid: string,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	profilePicture: string,
}

export class ProfilesTable {

	// Get a user from the Accounts table based on `username`
	static getProfile (uid: string): Promise<object> {
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