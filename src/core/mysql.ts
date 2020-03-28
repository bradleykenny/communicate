import { createConnection } from 'mysql';

var connection = createConnection({
	host: 'localhost',
	user: 'me',
	password: 'my-secret-pw',
	database: 'communicate'
});

connection.connect();