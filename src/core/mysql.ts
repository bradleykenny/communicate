import { createConnection } from 'mysql';

export function sqlSetup(): object {
	var connection = createConnection({
		host: 'localhost',
		user: 'me',
		password: 'my-secret-pw',
		database: 'communicate'
	});
	
	connection.connect();
	return connection;
};