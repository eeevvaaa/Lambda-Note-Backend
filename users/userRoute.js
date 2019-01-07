const express = require('express');
const users = require('./userModel');
const router = express.Router();
const bcrypt = require('bcryptjs');
const errHelper = (status, message, res) => {
	console.log('Error');
	res.status(status).json({ error: message });
};

const { authenticate, generateToken } = require('../auth/middleware');

// register
router.post('/register', (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 10);
	creds.password = hash;

	users
		.insert(creds)
		.then(id => {
			res.status(201).json({ message: `ID: ${id} created` });
		})
		.catch(err => errHelper(500, 'Error creating user.', res));
});

// LOGIN a user
router.post('/login', (req, res) => {
	const creds = req.body;

	users
		.get(creds.username)
		.then(user => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.status(200).json({ message: 'Logged in', token });
			} else {
				res.status(401).json({ message: 'You shall not pass!' });
			}
		})
		.catch(err => errHelper(500, 'Error loggin in.', res));
});

router.get('/users', authenticate, (_, res) => {
	users
		.get()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => errHelper(500, 'Error getting user.', res));
});

module.exports = router;
