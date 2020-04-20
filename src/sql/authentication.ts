import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class AuthenticationTable {
	static login(username: string, password: string): boolean {
		return true;
	}
};