import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class SessionsTable {
	
	static addSession(uid: string): string {
		const sid = uuid();
		return "123";
	}

	static checkValidSession(sid: string): boolean {
		return true;
	}

};