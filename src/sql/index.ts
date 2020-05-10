import mysql from 'mysql';

import AccountsTable from './accounts';
import AuthenticationTable from './authentication';
import ProfilesTable from './profiles';

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

export const Accounts = AccountsTable;
export const Authentication = AuthenticationTable;
export const Profiles = ProfilesTable;