require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import AccountsTable from './sql/accounts';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 5000);

// app.use(express.static(path.join(__dirname, 'build')));

// Test routes to ensure up and running

app.get('/test', (req: any, res: any) => {
	return res.send('test');
});

app.get('/ping', (req: any, res: any) => {
	return res.send('pong');
});

// Other routes

app.get('/', function (req: any, res: any) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/add/user', (req: any, res: any) => {
	const { username, firstName, lastName } = req.body;
	console.log(req.body);
	AccountsTable.insertUser(username, firstName, lastName);
	return res.send("Inserted user.");
});

app.get('/get', (req: any, res: any) => {
	AccountsTable.getUser("bradleyk");
	return res.send("Asynchronously getting user...");
});

// ... And listen
app.listen(
	app.get("port"), 
	() => { console.log(`Server running on port ${ app.get("port") }`); }
).on('error', (e: object) => console.error(e));