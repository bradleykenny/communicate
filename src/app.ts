require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import { Accounts, Authentication } from './sql';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set("port", process.env.PORT || 5000);

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

// Account routes

app.post('/add/user', (req: any, res: any) => {
	const { username, firstName, lastName } = req.body;
	Accounts.insertUser(username, firstName, lastName);
	return res.send("Inserted user.");
});

app.get('/get/user', async (req: any, res: any) => {
	try {
		let result = await Accounts.getUser(req.body.username)
			.then((results: any) => {
				return results;
			});
		return res.send(result);
	} catch(err) {
		console.log(err);
	}
});

// Authentication routes

app.post('/login', async (req: any, res: any) => {
	try {
		console.log(req.body);
		let result = await Authentication.login(req.body.username, req.body.password)
			.then((results: any) => {
				return results;
			});
		res.send(result);
	} catch(err) {
		console.log(err);
	}
});

app.post('/register', (req: any, res: any) => {
	const { username, password, firstName, lastName } = req.body;
	Authentication.register(username, password, firstName, lastName);
	return res.send("Inserted user.");
});

// ... And finally listen

app.listen(
	app.get("port"), 
	() => { console.log(`Server running on port ${ app.get("port") }`); }
).on('error', (e: object) => console.error(e));