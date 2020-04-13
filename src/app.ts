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

// Test route to ensure up and running
app.get('/ping', (req: any, res: any) => {
 	return res.send('pong');
});

// Other routes...
app.get('/', function (req: any, res: any) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/sql', (req: any, res: any) => {
	AccountsTable.insertUser("bradleyk", "Brad", "Kenny");
});

app.listen(
	5000, 
	() => { console.log(`server running on port : ${ 5000 }`); }
).on('error', (e: object) => console.error(e));

export default app;