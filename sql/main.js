const mysql = require('mysql');
const sqlstring = require('sqlstring');
const uuid = require('uuid');

require('dotenv').config();

var connection = mysql.createConnection({
	host: process.env.GSQL_HOST,
	user: process.env.GSQL_USER,
	password: process.env.GSQL_PASS,
	database: 'communication',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is:', results[0].solution);
});

let userId = 1;
let sql = sqlstring.format('SELECT * FROM users WHERE id = ?', [ userId ]);
console.log(sql);

function insertUser(username, firstName, lastName) {
	const str = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
	let safeQuery = sqlstring.format(str, [ uuid.v4(), username, firstName, lastName ]);
	connection.query(safeQuery, function(err, results, fields) {
		if (err) throw err;
		console.log(`Inserted user \'${ username }\' into the table.`);
	})
}

insertUser("bradleykenny", "Bradley", "Kenny");

connection.end();