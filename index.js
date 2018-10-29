const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const port = 8000;

const server = express();

server.use(express.json(), helmet(), cors());

server.listen(port, () =>
	console.log(`\n~~~ Server running on http://localhost:${port}/ ~~~\n`)
);
