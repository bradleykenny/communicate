import mysql from 'mysql';
import AccountsTable from './accounts';

export const connection = mysql.createConnection({
	host: process.env.GSQL_HOST,
	user: process.env.GSQL_USER,
	password: process.env.GSQL_PASS,
	database: 'communication',
});
	
	connection.connect((error) => {
	if (error) {
		console.error('Error connecting: ' + error);
		return;
	}

	console.log('Connected as ID #' + connection.threadId);
});

AccountsTable.insertUser("bradleykenny", "Bradley", "Kenny");

process.on('SIGINT', () => {
	connection.end(() => {
		console.log("MySQL connection closed.");
		process.exit(0);
	});
})

connection.end();