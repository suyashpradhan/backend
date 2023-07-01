/** @format */

const express = require('express');

const app = express();

app.get('/', (_, res) => {
	res.status(200);
	res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
	console.log('Server on port 3000');
});
