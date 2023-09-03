/** @format */

const express = require('express');
require('dotenv/config');

const app = express();

app.get('/', (_, res) => {
	res.status(200);
	res.send('hello world!');
});

app.get('/info', (_, res) => {
	res.status(200);
	res.json({ message: 'Info Route' });
});

app.listen(4000, () => {
	console.log('Server on port 4000');
});
