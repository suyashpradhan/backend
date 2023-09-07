/** @format */

import { Router } from 'express';
const Post = require('../models/Post.model');

const router = Router();

router.post('/', (req, res) => {
	console.log(req);
});

module.exports = router;
