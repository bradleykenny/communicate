const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'build')));

// Test route to ensure up and running
app.get('/ping', (req, res) => {
 	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);
