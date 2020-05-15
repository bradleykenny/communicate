require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import { AccountsTable, Authentication, ProfilesTable, SessionsTable, MessagesTable, Account } from './sql';

import { filteredAccount, filteredProfile } from './services/user';

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
	const { email, username, password, firstName, lastName } = req.body;
	Authentication.register(email, username, password, firstName, lastName);
	return res.send(`Registered ${username}.`);
});

// User routes

app.get('/get/user', async (req: any, res: any) => {
	try {
		let uid = await SessionsTable.getUserID(req.query.sid).then((res:any) => { return res[0].uid; });
		
		let account = await AccountsTable.getUser(uid)
			.then((results: any) => {
				return filteredAccount(results[0]);
			});
		
		let profile = await ProfilesTable.getProfile(uid)
			.then((results: any) => {
				return filteredProfile(results[0]);
			});

		return res.send({ ...account, ...profile });
	} catch(err) {
		console.log(err);
	}
});

app.get('/get/user/all', async (req: any, res: any) => {
	let allUsers = await AccountsTable.getAllUsers();
	res.send(allUsers.map((user: Account) => {
		return filteredAccount(user);
	}));
})

// Message routes

app.post('/messages/send', async (req: any, res: any) => {
	const { sender, receiver, title, text } = req.body;
	MessagesTable.sendMessage(sender, receiver, title, text);
	return res.send(`Sent message from ${sender} to ${receiver}.`);
});

app.get('/messages/get/sent', async (req: any, res: any) => {
	try {
		let result = await MessagesTable.getMessagesSent(req.query.uid)
			.then((results: any) => {
				console.log(results);
				return results;
			});
		res.send(result);
	} catch(err) {
		console.log(err);
	}
});

app.get('/messages/get/received', async (req: any, res: any) => {
	try {
		let result = await MessagesTable.getMessagesReceived(req.query.uid)
			.then((results: any) => {
				console.log(results);
				return results;
			});
		res.send(result);
	} catch(err) {
		console.log(err);
	}
});

// ... and finally listen

app.listen(
	app.get("port"), 
	() => { console.log("HELLO"); console.log(`Server running on port ${ app.get("port") }`); }
).on('error', (e: object) => console.error(e));