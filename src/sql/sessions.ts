import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class SessionsTable {
	
	static createSession(uid: string): Promise<Object> {
		const query = `
			DELETE FROM Sessions WHERE uid=?;
			INSERT INTO Sessions (sid, uid, created) VALUES (?, ?, ?); 
		`
		const sid = uuid();
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ uid, sid, uid, new Date() ],
				(error: any, results: any) => {
					if (error) throw error;
					console.log(`Created session #\'${ sid }\'.`);
					resolve(sid);
				}
			);
		});
	}

	static checkValidSession(sid: string): boolean {
		return true;
	}

};