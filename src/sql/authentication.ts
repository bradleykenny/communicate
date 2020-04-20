import { connection } from './index';
import { v4 as uuid } from 'uuid';

export default class Authentication {
	static login(username: string, password: string): boolean {
		return true;
	}
};