/** @format */

const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

app.get('/', (_, res) => {
	res.status(200);
	res.json({ data: 'hello world' });
});

app.use('/posts', postsRoutes);

app.listen(4000, () => {
	console.log('Server on port 4000');
});
