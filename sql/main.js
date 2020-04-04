const mysql = require('mysql');
const sqlstring = require('sqlstring');
const uuid = require('uuid');
// import { v4 as uuidv4 } from 'uuid';

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

function insertInto(username, firstName, lastName) {
	const str = "INSERT INTO Accounts (_id, username, firstName, lastName) VALUES (?, ?, ?, ?);";
	let query = sqlstring.format(str, [ uuid.v4(), username, firstName, lastName ]);
	connection.query(query, function(err, results, fields) {
		if (err) throw err;
		console.log("Entered!!");
	})
}

insertInto("bradleykenny", "Bradley", "Kenny");

connection.end();