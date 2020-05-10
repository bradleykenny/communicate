import mysql from 'mysql';

export * from './accounts';
export * from './authentication';
export * from './profiles';
export * from './sessions';

export const connection = mysql.createConnection({
	host: process.env.GSQL_HOST,
	user: process.env.GSQL_USER,
	password: process.env.GSQL_PASS,
	database: 'communication',
	multipleStatements: true
});
	
connection.connect(async (error) => {
	if (error) {
		console.error(error);
		return;
	}

	console.log('Connected as ID #' + connection.threadId);
});

process.on('SIGINT', () => {
	connection.end(() => {
		console.log(`MySQL connection #${ connection.threadId } closed.`);
		process.exit(0);
	});
});