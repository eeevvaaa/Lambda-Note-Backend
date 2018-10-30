const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = process.env.PORT || 8000;

const noteRoute = require('./notes/noteRoute');

const server = express();

server.use(express.json(), helmet(), cors());

server.get('/', (req, res) => {
	res.send('Hi!');
});

server.use('/api/notes', noteRoute);

server.listen(port, () =>
	console.log(`\n~~~ Server running on http://localhost:${port}/ ~~~\n`)
);
