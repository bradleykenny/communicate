import mysql from 'mysql';

export const connection = mysql.createConnection({
	host: process.env.GSQL_HOST,
	user: process.env.GSQL_USER,
	password: process.env.GSQL_PASS,
	database: 'communication',
});
	
connection.connect((error) => {
	if (error) {
		console.error(this);
		console.error(error);
		return;
	}

	console.log('Connected as ID #' + connection.threadId);
});

// This function contains code to terminate connection to the MySQL. 
// If not in function, terminates too early.
function quitter() { 
	process.on('SIGINT', () => {
		connection.end(() => {
			console.log("MySQL connection closed.");
			process.exit(0);
		});
	})

	connection.end();
}