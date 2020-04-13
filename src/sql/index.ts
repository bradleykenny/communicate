import mysql from 'mysql';

export const connection = mysql.createConnection({
	host: process.env.GSQL_HOST,
	user: process.env.GSQL_USER,
	password: process.env.GSQL_PASS,
	database: 'communication',
});
	
connection.connect((error) => {
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