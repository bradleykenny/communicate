import mysql from 'mysql';

export * from './accounts';
export * from './authentication';
export * from './profiles';
export * from './sessions';
export * from './messages';

let options = {};

if (process.env.PROD === "true") {
	options = {
		socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		multipleStatements: true
	}
} else {
	options = {
		host: process.env.GSQL_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		multipleStatements: true
	}
}

export const connection = mysql.createConnection(options);
	
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