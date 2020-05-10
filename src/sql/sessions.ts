import { connection } from './index';
import { v4 as uuid } from 'uuid';

export class SessionsTable {
	
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

	static getUserID(sid: string): Promise<Object> {
		const query = "SELECT uid FROM Sessions WHERE sid=?;";
		return new Promise((resolve: any) => {
			connection.query(
				query, 
				[ sid ], 
				(error: any, results: any) => {
					if (error) throw error;
					resolve(results);
				}
			);
		});
	}

	static checkValidSession(sid: string): boolean {
		return true;
	}

};